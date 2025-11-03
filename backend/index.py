from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.setup import origins

app = FastAPI();

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET","POST","PUT","DELETE","PATCH"],
    allow_headers=["Authorization", "Content-Type"],
)

@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response


@app.get("/health")
async def health_check():
    current_time = datetime.now()
    return {
        "status": "ok", 
        "time": current_time.isoformat()
      }

# route imports
from routes.index import index
from routes.search import search

# route initialization
app.include_router(index)
app.include_router(search)

# $ uvicorn index:app --port 10000 --reload --log-level debug 
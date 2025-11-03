from fastapi import APIRouter

from data.mockDocuments import MOCK_DOCUMENTS

search = APIRouter();

@search.get("/generate")
async def generate_random_pickme_1(query: str):
    print(f"Received query: {query}")
    try: 
      pickme: list = MOCK_DOCUMENTS
      return {
         "status": 200,
         "message": "Success",
         "data": pickme,
      }
    except Exception as e:
      print(f"Error: {e}")
      return {
         "status": 500,
         "message": "Error",
         "data": None,
      }
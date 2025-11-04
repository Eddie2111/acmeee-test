from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional

index = APIRouter();

@index.get("/")
def read_root():
    return {"message": "hello world"}


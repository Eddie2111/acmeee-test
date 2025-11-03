from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional
#from pytypes.typeSetup import Item
index = APIRouter();

@index.get("/")
def read_root():
    return {"message": "hello world"}


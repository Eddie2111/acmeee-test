from pydantic import BaseModel

class SearchQuery(BaseModel):
    query: str
    
class DocumentResult(BaseModel):
    id: int
    title: str
    excerpt: str
    summary: str
    category: str
    source_id: str
    date: str
from pydantic import BaseModel 

class Comerciante(BaseModel):
    id: int
    nombre: str
    email: str
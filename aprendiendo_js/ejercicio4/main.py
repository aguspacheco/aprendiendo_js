from fastapi import FastAPI, HTTPException
from models import Comerciante

app = FastAPI() 
comerciantes = []

@app.post("/comerciantes")
def crear_comerciante(comerciante: Comerciante):
    comerciantes.append(comerciante)
    return comerciante

@app.get("/comerciantes")
def listar_comerciantes():
    return comerciantes

@app.get("/comerciantes/{id}")
def obtener_comerciante(id: int):
    for c in comerciantes:
        if c.id == id:
            return c
    raise HTTPException(status_code=404, detail="No encontrado")

@app.put("/comerciantes/{id}")
def actualizar_comerciante(id: int, comerciante: Comerciante):
    for i, c in enumerate(comerciantes):
        if c.id == id:
            comerciantes[i] = comerciante
            return comerciante
    raise HTTPException(status_code=404, detail="No encontrado")

@app.delete("/comerciantes/{id}")
def borrar_comerciante(id: int):
    for i, c in enumerate(comerciantes):
        if c.id == id:
            comerciantes.pop(i)
            return {"mensaje": "Eliminado"}
    raise HTTPException(status_code=404, detail="No encontrado")
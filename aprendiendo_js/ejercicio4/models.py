"""Implementar la funcionalidad CRUD básica para los
módulos correspondientes a la porción “Comerciante” del
proyecto “PedidoAhora”.
Para ello deberán:

● Identificar los módulos
● Crear la estructura de archivos
● Diseñar los modelos de datos
● Implementar la funcionalidad
● Probar lo implementado mediante la UI de swagger.
"""
from pydantic import BaseModel 

class Comerciante(BaseModel):
    id: int
    nombre: str
    email: str
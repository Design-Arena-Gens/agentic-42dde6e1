from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.config import settings
from .db.mongodb import close_mongo_connection, connect_to_mongo
from .routers import auth, contact

app = FastAPI(title=settings.project_name)

app.add_middleware(
  CORSMiddleware,
  allow_origins=settings.cors.allow_origins,
  allow_credentials=settings.cors.allow_credentials,
  allow_methods=settings.cors.allow_methods,
  allow_headers=settings.cors.allow_headers,
)


@app.on_event("startup")
async def startup_event():
  await connect_to_mongo()


@app.on_event("shutdown")
async def shutdown_event():
  await close_mongo_connection()


@app.get("/health", tags=["health"])
async def health_check():
  return {"status": "ok"}


app.include_router(auth.router)
app.include_router(contact.router)

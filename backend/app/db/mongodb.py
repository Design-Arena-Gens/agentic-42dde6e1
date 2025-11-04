from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from typing import Optional

from ..core.config import settings

mongodb_client: Optional[AsyncIOMotorClient] = None
database: Optional[AsyncIOMotorDatabase] = None


async def connect_to_mongo() -> None:
  global mongodb_client, database
  if mongodb_client:
    return
  mongodb_client = AsyncIOMotorClient(settings.mongodb_uri)
  database = mongodb_client[settings.mongodb_db]


async def close_mongo_connection() -> None:
  global mongodb_client
  if mongodb_client:
    mongodb_client.close()
    mongodb_client = None

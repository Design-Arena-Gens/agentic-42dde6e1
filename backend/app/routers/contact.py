from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorCollection

from ..db.mongodb import database
from ..schemas.contact import ContactRequestCreate

router = APIRouter(prefix="/contact", tags=["contact"])


async def get_contact_collection() -> AsyncIOMotorCollection:
  if database is None:
    raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Database not ready")
  return database.get_collection("contact_requests")


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_contact_request(
  payload: ContactRequestCreate,
  collection: AsyncIOMotorCollection = Depends(get_contact_collection)
):
  document = {
    "full_name": payload.full_name,
    "email": payload.email.lower(),
    "phone": payload.phone,
    "company": payload.company,
    "message": payload.message,
    "created_at": datetime.utcnow()
  }
  await collection.insert_one(document)
  return {"message": "درخواست شما با موفقیت ثبت شد. کارشناسان ما به زودی با شما تماس می‌گیرند."}

from datetime import timedelta

from fastapi import APIRouter, HTTPException, status
from fastapi import Depends
from motor.motor_asyncio import AsyncIOMotorCollection

from ..core.security import create_access_token, get_password_hash, verify_password
from ..schemas.auth import TokenResponse, UserCreate, UserLogin, UserPublic
from ..db.mongodb import database
from ..core.config import settings

router = APIRouter(prefix="/auth", tags=["auth"])


async def get_user_collection() -> AsyncIOMotorCollection:
  if database is None:
    raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Database not ready")
  return database.get_collection("users")


def serialize_user(document) -> UserPublic:
  return UserPublic(id=str(document["_id"]), email=document["email"], full_name=document.get("full_name"))


@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def register_user(payload: UserCreate, users: AsyncIOMotorCollection = Depends(get_user_collection)):
  existing = await users.find_one({"email": payload.email.lower()})
  if existing:
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="این ایمیل قبلا ثبت شده است.")

  password_hash = get_password_hash(payload.password)
  user_doc = {
    "email": payload.email.lower(),
    "password_hash": password_hash,
    "full_name": payload.full_name,
    "role": "user"
  }
  result = await users.insert_one(user_doc)
  user_doc["_id"] = result.inserted_id

  access_token = create_access_token({"sub": str(user_doc["_id"]), "email": user_doc["email"]})
  return TokenResponse(access_token=access_token, user=serialize_user(user_doc))


@router.post("/login", response_model=TokenResponse)
async def login_user(payload: UserLogin, users: AsyncIOMotorCollection = Depends(get_user_collection)):
  user_doc = await users.find_one({"email": payload.email.lower()})
  if not user_doc or not verify_password(payload.password, user_doc["password_hash"]):
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="ایمیل یا رمز عبور نادرست است.")

  access_token = create_access_token(
    {"sub": str(user_doc["_id"]), "email": user_doc["email"]},
    timedelta(minutes=settings.access_token_expire_minutes)
  )
  return TokenResponse(access_token=access_token, user=serialize_user(user_doc))

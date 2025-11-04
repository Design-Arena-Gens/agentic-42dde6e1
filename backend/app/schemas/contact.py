from datetime import datetime
from pydantic import BaseModel, EmailStr, Field


class ContactRequestCreate(BaseModel):
  full_name: str = Field(..., min_length=3, max_length=120)
  email: EmailStr
  phone: str = Field(..., min_length=6, max_length=20)
  company: str = Field(..., min_length=2, max_length=120)
  message: str = Field(..., min_length=10, max_length=1200)


class ContactRequestOut(ContactRequestCreate):
  id: str
  created_at: datetime

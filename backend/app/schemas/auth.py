from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class UserBase(BaseModel):
  email: EmailStr
  full_name: Optional[str] = None


class UserCreate(UserBase):
  password: str = Field(min_length=8)


class UserLogin(BaseModel):
  email: EmailStr
  password: str = Field(min_length=8)


class UserPublic(UserBase):
  id: str


class TokenResponse(BaseModel):
  access_token: str
  token_type: str = "bearer"
  user: UserPublic

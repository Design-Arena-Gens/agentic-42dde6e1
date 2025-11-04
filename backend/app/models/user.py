from typing import Optional
from datetime import datetime


def user_document(
  *,
  email: str,
  password_hash: str,
  full_name: Optional[str] = None,
  role: str = "user"
) -> dict:
  return {
    "email": email.lower(),
    "password_hash": password_hash,
    "full_name": full_name,
    "role": role,
    "created_at": datetime.utcnow(),
    "updated_at": datetime.utcnow()
  }

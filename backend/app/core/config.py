from pydantic import AnyUrl, BaseModel, EmailStr
from pydantic_settings import BaseSettings
from typing import List


class CORSSettings(BaseModel):
  allow_origins: List[AnyUrl | str] = ["http://localhost:3000", "https://agentic-42dde6e1.vercel.app"]
  allow_credentials: bool = False
  allow_methods: List[str] = ["*"]
  allow_headers: List[str] = ["*"]


class Settings(BaseSettings):
  project_name: str = "Agentic AI Agency API"
  mongodb_uri: str = "mongodb://localhost:27017"
  mongodb_db: str = "agentic_ai_agency"
  jwt_secret_key: str = "change_me_agentic_secret"
  jwt_algorithm: str = "HS256"
  access_token_expire_minutes: int = 60 * 24
  cors: CORSSettings = CORSSettings()
  admin_notification_email: EmailStr | None = "founder@agenticaiagency.ir"

  class Config:
    env_file = ".env"
    env_file_encoding = "utf-8"
    env_nested_delimiter = "__"


settings = Settings()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Bootsrap API",
    description="Bootstrap API for FastAPI",
    version="0.1.0",
    dependencies=[],
)

# Cors Settings
origins = [
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

for router in []:
    app.include_router(router)

# syntax=docker/dockerfile:1
FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

RUN adduser --disabled-password --no-create-home appuser

RUN --mount=type=cache,target=/root/.cache/pip \
    --mount=type=bind,source=requirements.txt,target=requirements.txt \
    python -m pip install -r requirements.txt

COPY --chown=appuser:appuser . .

USER appuser

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



















# Frontend - Node.js 22
# FROM node:22-slim

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 5173
# # Se estiver usando Vite (padrão em 2025), o comando é:
# CMD ["npm", "run", "dev", "--", "--host"]

# services:
#   db:
#     image: postgres:17-alpine
#     environment:
#       POSTGRES_DB: meu_db
#       POSTGRES_USER: user
#       POSTGRES_PASSWORD: password
#     volumes:
#       - postgres_data:/var/lib/postgresql/data

#   backend:
#     build: ./backend
#     volumes:
#       - ./backend:/app
#     ports:
#       - "8000:8000"
#     environment:
#       - DATABASE_URL=postgres://user:password@db:5432/meu_db
#     depends_on:
#       - db

#   frontend:
#     build: ./frontend
#     volumes:
#       - ./frontend:/app
#       - /app/node_modules
#     ports:
#       - "5173:5173"
#     depends_on:
#       - backend

# volumes:
#   postgres_data:


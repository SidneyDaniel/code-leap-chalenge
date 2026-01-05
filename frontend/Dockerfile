# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.11.0-slim

FROM node:${NODE_VERSION} AS dev

WORKDIR /app

# Caminho relativo ao contexto ./frontend
COPY codeleap-frontend/package.json codeleap-frontend/package-lock.json ./

RUN --mount=type=cache,target=/root/.npm npm install

# Copia o restante do código
COPY --chown=node:node codeleap-frontend/ ./

USER node

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
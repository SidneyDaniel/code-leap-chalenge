# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.11.0-slim

FROM node:${NODE_VERSION} AS build
WORKDIR /app

COPY codeleap-frontend/package*.json ./
RUN npm install
COPY codeleap-frontend/ ./
RUN npm run build

FROM node:${NODE_VERSION}
WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

CMD serve -s dist -l $PORT
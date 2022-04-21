# syntax=docker/dockerfile:1
FROM node:12-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn add pm2

COPY . ./

EXPOSE 3000

CMD yarn start
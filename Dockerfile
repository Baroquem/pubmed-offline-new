# syntax=docker/dockerfile:1
FROM node:12-alpine

WORKDIR /usr/src/app/cpep

COPY . .
RUN yarn install
RUN yarn add pm2



EXPOSE 3000

CMD yarn start
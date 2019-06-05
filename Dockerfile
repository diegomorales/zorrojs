FROM node:10-alpine

RUN mkdir -p /home/node/code

RUN npm i -g npm

USER node

WORKDIR /home/node/code

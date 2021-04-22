FROM node:14-slim

COPY ./package*.json ./
RUN npm ci

COPY ./ .
CMD ["node", "index.js"]
FROM node:14-slim

COPY ./package*.json ./
RUN npm ci

COPY ./ .
EXPOSE 8080

CMD ["npm", "start"]
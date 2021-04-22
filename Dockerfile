FROM node:14-slim

COPY ./package*.json ./
RUN npm ci

COPY ./ .
EXPOSE 5000

CMD ["npm", "start"]
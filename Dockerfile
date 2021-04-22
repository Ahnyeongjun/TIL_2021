FROM node:14-slim
COPY package.json /src/package.json
RUN  cd /src; npm install
COPY . /src
EXPOSE 8080
WORKDIR /src

CMD node app.js
<<<<<<< HEAD
FROM node:14

COPY ./package*.json ./
RUN npm install

COPY ./ .
EXPOSE 8080

CMD ["npm", "start"]
=======
FROM openjdk:11.0.9-slim

COPY ./build/libs/*.jar test.jar
ENTRYPOINT ["java","-jar","/test.jar"]
>>>>>>> project2/master

FROM node:alpine

WORKDIR /app

COPY . .

ENV PATH=$PATH:/app/node_modules/.bin

RUN npm install

CMD [ "nodemon", "app.js" ]
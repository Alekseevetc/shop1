FROM node:latest

MAINTAINER alekseevetc


WORKDIR /var/www
COPY . /var/www

RUN npm install

ENTRYPOINT ["npm", "start"]
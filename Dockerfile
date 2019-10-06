# base image
FROM node:latest

# set working directory
RUN mkdir /myapp
WORKDIR /myapp

RUN apt-get update \
    && apt-get install -y chromium

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /myapp/node_modules/.bin:$PATH
ENV CHROME_BIN=/usr/bin/chromium

# install and cache app dependencies
COPY . /myapp/
RUN npm install

EXPOSE 4200 9333

# start app
CMD ng serve --host 0.0.0.0

# base image
FROM node:latest

# set working directory
RUN mkdir /myapp
WORKDIR /myapp

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /myapp/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /myapp/
RUN npm install

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0

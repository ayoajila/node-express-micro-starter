FROM node:10.15.3-alpine

LABEL maintainer="ayo ajila"

COPY . /src

WORKDIR /src

RUN npm install --quiet --production

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
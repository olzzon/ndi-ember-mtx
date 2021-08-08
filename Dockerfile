FROM node:12.22-alpine3.11
RUN apk update && apk add avahi-libs && apk add gcompat
COPY . /opt/ndi-ember-mtx
COPY ./lib/x86_64-linux-gnu /usr/lib
WORKDIR /opt/ndi-ember-mtx
EXPOSE 3008/tcp
EXPOSE 9000/tcp
CMD ["yarn", "start"]

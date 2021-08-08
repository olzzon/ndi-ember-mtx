FROM node:12.22-alpine3.11
RUN apk update && apk add avahi-libs
COPY . /opt/ndi-ember-mtx
WORKDIR /opt/ndi-ember-mtx
COPY /opt/ndi-ember-mtx/lib/x86_64-linux-gnu /usr/lib
EXPOSE 3008/tcp
EXPOSE 9000/tcp
CMD ["yarn", "start"]

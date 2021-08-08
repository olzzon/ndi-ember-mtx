FROM node:16-alpine
RUN apk update && apk add avahi-libs g++ make libc6-compat gcompat
COPY . /opt/ndi-ember-mtx
COPY ./lib/x86_64-linux-gnu /usr/lib
WORKDIR /opt/ndi-ember-mtx
EXPOSE 3008/tcp
EXPOSE 9000/tcp
EXPOSE 5960-6100/tcp
EXPOSE 5960-6100/udp
CMD ["yarn", "start"]

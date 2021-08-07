FROM node:12.22-alpine3.11
COPY . /opt/ndi-ember-mtx
COPY ./lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu
WORKDIR /opt/ndi-ember-mtx
EXPOSE 3008/tcp
EXPOSE 9000/tcp
CMD ["yarn", "start"]

FROM node:12.22-alpine3.11
COPY . /opt/ndi-ember-mtx
WORKDIR /opt/ndi-ember-mtx
EXPOSE 3008/tcp
EXPOSE 9000/tcp
CMD ["yarn", "start"]

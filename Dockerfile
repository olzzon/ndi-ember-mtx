FROM node:12.22-alpine3.11
RUN apt-get update && apt-get install -y libavahi-client-dev
COPY . /opt/ndi-ember-mtx
WORKDIR /opt/ndi-ember-mtx/lib/x86_64-linux-gnu
COPY . /usr/lib
WORKDIR /opt/ndi-ember-mtx
EXPOSE 3008/tcp
EXPOSE 9000/tcp
CMD ["yarn", "start"]

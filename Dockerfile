FROM node:16.5-alpine3.11
EXPOSE 3008/tcp
EXPOSE 9000/udp
CMD ["yarn", "start"]

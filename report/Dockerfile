FROM node:latest
LABEL maintainer="Ivan Kotovich"
WORKDIR /report
RUN npm install express
WORKDIR /
COPY mochawesome-server.js /report/mochawesome-server.js
WORKDIR /report

ENTRYPOINT ["node", "mochawesome-server.js"]

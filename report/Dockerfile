FROM node:latest
LABEL maintainer="Ivan Kotovich"
WORKDIR /report
RUN npm install express
WORKDIR /
COPY mochawesome-server.js /report/mochawesome-server.js
WORKDIR /report

ENTRYPOINT ["node", "mochawesome-server.js"]

# docker build -t cy-report .   to build the image
# docker run --rm -v cy-volume:/report/mochawesome -p 1234:1234 cy-report   to run report and publish on port 1234

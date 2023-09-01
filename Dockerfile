FROM node:latest
LABEL maintainer="Ivan Kotovich"
ENV npm_config_env PROD
RUN apt-get -y update
RUN apt-get -y install wget
RUN apt-get -y install xvfb
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; exit 0
RUN apt -f install -y
COPY package.json /fw/package.json
COPY package-lock.json /fw/package-lock.json
WORKDIR /fw
RUN npm install
WORKDIR /
COPY src /fw/src
WORKDIR /fw
RUN ./node_modules/.bin/cypress install

ENTRYPOINT ["npm", "test"]

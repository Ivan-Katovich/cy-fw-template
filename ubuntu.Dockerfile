FROM ubuntu:latest
LABEL maintainer="Ivan Kotovich"
RUN apt-get -y update
RUN apt-get -y install curl
RUN apt-get -y install wget unzip
RUN apt-get -y install xvfb
RUN apt-get -y install tzdata
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; exit 0
RUN apt -f install -y
RUN apt-get -y install nodejs
RUN apt-get -y install npm
COPY . /fw
WORKDIR /fw
RUN npm install
RUN ./node_modules/.bin/cypress install

ENTRYPOINT ["npm", "test"]

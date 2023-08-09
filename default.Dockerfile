FROM ubuntu:latest
LABEL maintainer="Ivan Kotovich"
COPY . /fw
RUN apt -y update
RUN apt -y install curl
RUN apt -y install wget unzip
RUN apt -y install xvfb
RUN apt-get install -y tzdata
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; exit 0
RUN apt -f install -y
RUN apt -y install nodejs
RUN apt -y install npm
WORKDIR /fw
RUN npm install
RUN ./node_modules/.bin/cypress install

ENTRYPOINT ["npm", "test"]

FROM ipengr/debian

RUN mkdir -p /usr/src/app

#go to working directory
WORKDIR /usr/src/app

#copy  all files to work directory
COPY . /usr/src/app

RUN npm install

EXPOSE  8443

CMD node app.js
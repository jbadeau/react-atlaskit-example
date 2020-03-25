FROM node:10

COPY . /opt/service/
WORKDIR /opt/service

EXPOSE 3000

ENTRYPOINT ["npm", "start", "--"]
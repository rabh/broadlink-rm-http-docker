FROM node:8.10

RUN mkdir -p /app
WORKDIR /app

COPY /config/config.local.js /app/config.js
COPY package.json /app/package.json
COPY index.js /app/index.js

RUN npm install

EXPOSE 1880

CMD [ "node", "/app/index.js" ]

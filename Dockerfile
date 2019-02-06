FROM node:10

WORKDIR /martin-proxy-server

COPY . .

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
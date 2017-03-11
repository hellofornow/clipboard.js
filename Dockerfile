FROM node:latest
COPY ./demo /src
WORKDIR /src
RUN npm install

CMD ["npm", "start"]

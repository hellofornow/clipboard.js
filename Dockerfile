FROM node:latest
COPY ./demo /src
WORKDIR /src
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

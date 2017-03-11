FROM node:latest
COPY ./demo /src
WORKDIR /src

CMD ["npm", "start"]

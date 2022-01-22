FROM node:16.13.0

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y

WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "index.js"]
EXPOSE 6892

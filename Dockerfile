FROM node:10.0-alpine

RUN mkdir -p /src/app/location

WORKDIR /src/app/location

COPY package.json /src/app/location

RUN npm install

COPY . /src/app/location

EXPOSE 3002

CMD [ "npm", "start" ]

#docker exec docker_location_location_1 sh -c "npm run db"
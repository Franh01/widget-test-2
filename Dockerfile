#Inicio

#FROM node:16.17.0 AS builder
FROM node:17-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install


#se cambia docker file a production

COPY . .

RUN npm run build


EXPOSE 3000

CMD [ "npm", "run", "preview" ]


#CMD ["npm", "run", "dev"]

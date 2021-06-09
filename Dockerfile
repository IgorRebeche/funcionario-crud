FROM node:latest

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]

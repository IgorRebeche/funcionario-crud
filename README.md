## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Application Structure
### User CRUD

#### Create
- Endpoint: `/user`

- Content-type: `application/json`

- Method: `POST`

- Body:
```json
  {
    "name": "string",
    "email":"string",
    "role":"string",
    "cpf": "string",
    "adress": {
      "zipcode": "string",
      "street": "string"
    }
  }

```

#### Update
- Endpoint: `/user/{id}`

- Content-type: `application/json`

- Method: `PUT`


```json
  {
    "name": "string", // Not required
    "email":"string", // Not required
    "role":"string", // Not required
    "cpf": "string", // Not required
    "adress": { // Not required
      "zipcode": "string", // required if using adress
      "street": "string" //required if using adress
    }
  }

```
#### Delete
- Endpoint: `/user/{id}`

- Method: `DELETE`

## Mongo Instalation
Using Docker [Mongo Link for more information](https://hub.docker.com/_/mongo)

    docker pull mongo
    docker run -dp 27017:27017 --name banco_mongo mongo
Using Local Mongo:
    [MongoDB Download Link](https://www.mongodb.com/try/download/community)

## Dockerize for Production
    docker compose up
## App Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).

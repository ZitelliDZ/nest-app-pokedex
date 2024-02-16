<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Rest API para el manejo de pokemones en [NestJS](https://github.com/nestjs/nest).

## Ejecutar en desarrollo
1. Clonar el repo
2. Ejecutar
```bash
 npm install
```
3. Tener Nest CLI
```bash
 npm i -g @nestjs/cli
```
4. Levantar la base de datos
```bash
 docker-compose up -d
```
5. Clonar el archivo .env.example y renombrarlo a .env
6. Levantar el servidor
```bash
 npm run start:dev
```
7. Reconstruir la semilla de la base de datos
```bash
 http://localhost:3000/api/v2/seed
```

## Stack usado
- NestJS
- Mongo
- Docker








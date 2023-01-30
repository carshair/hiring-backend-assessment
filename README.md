# carSHAiR Backend Assessment
## Assumptions Made
### Models

- There should be vehicle model so that adding other vehicles in future would be easy
- Car should inherit vehicle model.
- In this case, all the provided information will be common for each vehicle, so car do not have anything. It will inherit everything from vehicle.

### Interceptors

- Car Interceptor used for car controller to change each response into a specific format before sending to client.
### Middlewares

- To handle errors throughout the project, there should be a middleware which handle each error
- It will increase readability for client.
### Interfaces

- We are using typescript so implemented interface for car
- Implemented carDTO which also provide validation.
- Before doing any database operation, there should be a validation on request body so that database operation should only occur on right data.

### Controllers

- Controller class should handle all the business logic
- CRUD operations should be implemented here
- Vin decoder api should handle in a separate function, so that it could be use with other vehicles too.

### Resources

  - MySQL
  - TypeORM
  - TypeScript
  - Node.js
  - Express
  - routing-controllers
  - class-validator

## Goal and requirements

- System should be able to
  - fetch all cars
  - fetch car by id
  - create a car
  - update a car
  - delete a car
  - decode the VIN.
  - decoded VIN information into database.

# Feedback

  - Requirements were pretty clear
  - Difficulty level is easy. 4/10
  - Project-based assessment is better. It gives the better idea.

## Template Project Setup
### Prerequisites

- Docker
  - [General install](https://docs.docker.com/get-docker/)
  - [homebrew](https://formulae.brew.sh/cask/docker)

- yarn
  - [General install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  - [homebrew](https://formulae.brew.sh/formula/yarn)

### Getting Started

To bring up the environment, perform the following steps:

1. Bring up the MySQL database

    ```bash
    # In the project root directory
    docker compose up
    # Exposes database on port 3306
    ```

2. Bring up express server in development mode

    ```bash
    # In a separate terminal session
    yarn dev
    # Exposes express app on port 8889
    ```

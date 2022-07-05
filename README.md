# Description
## Objectives
Implementing the CRUD functionalities of the sketch below <br/>
[List a car UI sketch](https://xd.adobe.com/view/fed5ede8-2626-46ec-a3f9-ec0cba0df6f4-ab86/)
## Technical Instructions
### The Project Structure

├── src <br/>
│   ├── api <br/>
│   │   ├── `controllers:` API Controllers<br/>
│   │   │   ├── `dtos`: Data transfer objects for view models<br/>
│   │   ├── `models:` Entity models, the object maps for the database models<br/>
│   │   ├── `repositories:` Entity repositories inherited from typeorm generic repository<br/>
│   │   ├── `services:` App services, including VIN decoder service<br/>
│   ├── loaders<br/>
│   │   ├── `DatabaseConnectionLoader.ts`: Database connection loader<br/>
│   │   ├── `ExpressServerLoader.ts`: Express application loader<br/>
│   ├── index.ts<br/>
├── test<br/>
│   ├── services<br/>
│   │   ├── `vin-service.test.ts:` A unit test implemented to check the VIN decoder functionality<br/>

### The Entity Model
When user list a car, a car record will be created in the database. A car record includes:
- `id`: uuid (Primary Key)
- `licensePlate:` string
- `registration:` number
- `registrationState:` string
- `registrationExpiration:` Date
- `name:` string
- `vin:` string
- `carValue:` number
- `currentMileage:` number
- `description:` string (Optional)
- `year:` number (decoded from VIN)
- `make:` string (decoded from VIN)
- `model:` string (decoded from VIN)


User can update or delete a created record.
`year`, `make` and `model` are decoded from VIN. A VIN service is created to decode these values.
### Unit Testing
Jest is configured using babel to implement unit tests. As a sample unit test, `vin-service.test.ts` is implemented to test the VIN decoding functionality.
# How to Run
## Prerequisites

- Docker
  - [General install](https://docs.docker.com/get-docker/)
  - [homebrew](https://formulae.brew.sh/cask/docker)

- yarn
  - [General install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  - [homebrew](https://formulae.brew.sh/formula/yarn)

## Getting Started

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

## Tests

``` bash
yarn test
```
## Postman Collection
A postman collection has been located in the root directory of the project which includes all requests are implemented.

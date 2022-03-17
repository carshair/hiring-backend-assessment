# carSHAiR Backend Assessment

![carSHAiR Logo](https://www.carshair.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCarSHAiR-Logo.bfa0a90d.png&w=3840&q=75)

## Description

### Background

carSHAiR is a peer to peer car sharing platform with a mission to bring high tech solutions to provide an exceptional experience for Guests and Hosts within the car sharing space.

Often times, product requirements are manifested as a series of UI sketches. These sketches provide context as to the user experience our product team envisions for users of the platform.

In order for a car to be "rentable", a car must first be "listed" on the platform. A common user workflow for our Hosts (owners of cars) is to list a new car on the platform. This workflow takes Hosts through a multi-step process in which details about the car are collected, building towards a final listing of their car.

One simplified step in this multi-step process of listing a car is to collect essential details about the Host's car.

### Objectives

As a Backend Developer, you are given a UI sketch from the product team of a single step within the "List a car" workflow. It is your objective to design and build a set of REST API's to support the functionality expressed within the provided UI sketch.

[List a car UI sketch](https://xd.adobe.com/view/fed5ede8-2626-46ec-a3f9-ec0cba0df6f4-ab86/)

Scope Clarifications:

- The scope of your responsibilities are limited to the isolated feature of collecting and storing the information presented on the UI sketch. Although it is implied the car is "owned" by a Host account, design and implementation of User accounts is outside the scope of your responsibilities.
- Frontend design/implementation is not required.

#### Constraints

- Your REST API must save the collected data to a database
- Your REST API must support CRUD functionality to **one** resource
- Along with saving the VIN itself, your API must also decode the VIN and save the decoded vehicle details
  - Note: only basic vehicle details such as year, make, model are required to be saved.

### Resources

- [List a car UI sketch](https://xd.adobe.com/view/fed5ede8-2626-46ec-a3f9-ec0cba0df6f4-ab86/)

- We recognize that the process of setting up a project from scratch is a rare occurrence in most developer's day-to-day work. The design of this assessment is not to test your ability on how to setup a project, but rather your ability to contribute to an established project.

  Choice of language, framework, database, etc is flexible but bonus points if you are already comfortable with our current stack:
  - MySQL
  - TypeORM
  - TypeScript
  - Node.js
  - Express
  - routing-controllers

  If you do so choose to implement using our stack, feel free to fork this template repository to help you get started.

- [TypeORM documentation](https://github.com/typeorm/typeorm)

- [routing-controllers documentation](https://github.com/typestack/routing-controllers)

- [Random VIN generator](https://vingenerator.org/)

- [National Highway Traffic Safety Administration (NHTSA) API](https://vpic.nhtsa.dot.gov/api/) for decoding a VIN

### Submission Requirements

- Send us a link to your submission inside a git repository
  - Show us you are comfortable working with git by keeping a detailed git history

- Provide a README with your submission summarizing:
  - Assumptions made
  - Step by step details on how to bring up the server

- Please omit the company name from your repository/project name

## Template Project Setup

This template project is composed of the following stack:

- MySQL (through Docker)
- TypeORM
- TypeScript
- Node.js
- Express
- routing-controllers

### Prerequisites

- Docker
  - [General install](https://docs.docker.com/get-docker/)
  - [homebrew](https://formulae.brew.sh/cask/docker)

- yarn
  - [General install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  - [homebrew](https://formulae.brew.sh/formula/yarn)

To bring up the environment, perform the following steps:

1. Bring up the MySQL database

    ```bash
    # In the project root directory
    docker compose up
    ```

2. Bring up express server in development mode

    ```bash
    # Exposes express app on port 8889
    yarn dev
    ```

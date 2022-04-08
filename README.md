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

- The scope of your responsibilities are limited to the isolated feature of collecting and storing the information presented on the UI sketch. Although it is implied the car is "owned" by a Host account, design and implementation of accounts is outside the scope of your responsibilities. Assume cars are not owned by users.
- Frontend design/implementation is not required.

#### Constraints

- Your REST API must save the collected data to a database
- Your REST API must support CRUD functionality to **one** resource (e.g. CRUD endpoints for a **car** resource)
- Along with saving the VIN itself, your API must also decode the VIN and save the decoded vehicle details
  - Note: only basic vehicle details such as year, make, model are required to be saved.

### Resources

- [List a car UI sketch](https://xd.adobe.com/view/fed5ede8-2626-46ec-a3f9-ec0cba0df6f4-ab86/)

- Setting up a project from scratch is a rare occurrence in most developer's the day-to-day responsibilities. The design of this assessment is not to test your ability on how to setup a project, but rather your ability to contribute to an established project.

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

- If forking this repository, delete this README and replace with your own

- Provide a README with your submission summarizing:
  - Assumptions made
  - Step by step details on how to bring up the server

- Please omit the company name from your repository/project name

- (Optional) We are always trying to improve the assessment experience for future candidates. When sending your submission, please provide some feedback on the assessment description including details such as:

  - How long the assessment took to complete
  - Whether or not the requirements were clear
  - On a scale of 1 - 10, the level of difficulty
  - If given the choice, would they rather have done an Leet-code style assessment over a project-based assessment

  Feedback on the assessment description will not affect our evaluation of your submission.

## Template Project Setup

### Overview

To reiterate - **there are no restrictions on the choice of tech stack used for your submission.** The main purpose of this assessment is to assess your ability to contribute to an established project.

If you do choose to implement using our stack, feel free to fork this template repository to help you get started. Feel free to add or remove dependencies as necessary.

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

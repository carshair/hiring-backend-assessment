# Vehicle API

Last update: **v1**.**0.0**(**2022**-**04**-**30**)

**Changes:**

- Add create, read, update, delete vehicle api

---

## Create a vehicle

**Request:**
`POST /api/v1/vehicle`

```
Header: Authorization Bearer token
```

```json
{
  "mileage": 100,
  "color": "#000000",
  "description": "a new car",
  "license_number": "ABC123",
  "registration_number": "ABC123",
  "registration_state": "CA",
  "registration_expiry_date": "05/12/2000",
  "registration_name": "David d",
  "value": 99.987,
  "vehicle_identification_number": "5J6RM4H75CL059384",
}
```

**Response:**

> success, status = 201 (CREATED)

```json
{
    "mileage": 1003,
    "color": "#0001111",
    "description": "a new car haha",
    "license_number": "ABC136",
    "registration_number": "ABC136",
    "registration_state": "AC",
    "registration_name": "David dccc",
    "registration_expiry_date": "2001-05-12T00:00:00.000Z",
    "value": 99.987,
    "vehicle_identification_code": {
        "id": "48e67c25-846c-4d6c-991e-c6ea3aa83d8b",
        "code": "5J6RM4H75CL04938",
        "make": "HONDA",
        "make_id": "474",
        "manufacturer": "AMERICAN HONDA MOTOR CO., INC.",
        "manufacturer_id": "988",
        "model": "CR-V",
        "model_id": "1865",
        "model_year": "2012",
        "createdDate": "2022-05-03T19:59:01.034Z",
        "updatedDate": "2022-05-03T19:59:01.034Z",
        "deletedDate": null
    },
    "deletedDate": null,
    "id": "2b126705-0c31-45e6-bbde-a43a5ff13e69",
    "createdDate": "2022-05-03T19:59:01.066Z",
    "updatedDate": "2022-05-03T19:59:01.066Z"
}
```

> fail, status = 400/5xx

- 400 for user input validation
- 503 for 3rd party api error / duplicated code

```json
{
  "name": "BadRequestError",
  "message": "license number should be conisted of 6 characters",
  "stack": "Error: \n    at new HttpError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/HttpError.ts:16:18)\n    at new BadRequestError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/BadRequestError.ts:10:5)\n    at VehicleController.<anonymous> (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/api/controllers/assessment-entity/vehicle/index.ts:139:13)\n    at Generator.next (<anonymous>)\n    at /Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/tslib/tslib.js:117:75\n    at new Promise (<anonymous>)\n    at Object.__awaiter (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/tslib/tslib.js:113:16)\n    at VehicleController.create (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/api/controllers/assessment-entity/vehicle/index.ts:109:24)\n    at ActionMetadata.callMethod (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/metadata/ActionMetadata.ts:252:44)\n    at /Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/RoutingControllers.ts:123:28"
}
```
```json
{
    "name": "QueryFailedError",
    "message": "Duplicate entry '5J6RM4H75CL04938' for key 'vehicle_identification_code.IDX_5c685f775091873679074f6467'",
    "stack": "QueryFailedError: Duplicate entry '5J6RM4H75CL04938' for key 'vehicle_identification_code.IDX_5c685f775091873679074f6467'\n    at Query.onResult (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/driver/mysql/MysqlQueryRunner.ts:222:33)\n    at Query.execute (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/mysql2/lib/commands/command.js:36:14)\n    at PoolConnection.handlePacket (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/mysql2/lib/connection.js:456:32)\n    at PacketParser.onPacket (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/mysql2/lib/connection.js:85:12)\n    at PacketParser.executeStart (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/mysql2/lib/packet_parser.js:75:16)\n    at Socket.<anonymous> (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/mysql2/lib/connection.js:92:25)\n    at Socket.emit (events.js:376:20)\n    at Socket.emit (domain.js:470:12)\n    at addChunk (internal/streams/readable.js:309:12)\n    at readableAddChunk (internal/streams/readable.js:284:9)",
    "query": "INSERT INTO `vehicle_identification_code`(`id`, `code`, `make`, `make_id`, `manufacturer`, `manufacturer_id`, `model`, `model_id`, `model_year`, `createdDate`, `updatedDate`, `deletedDate`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, DEFAULT, DEFAULT, DEFAULT)",
    "parameters": [
        "49c74a4f-fb9b-4555-83bf-f8652c36d37c",
        "5J6RM4H75CL04938",
        "HONDA",
        "474",
        "AMERICAN HONDA MOTOR CO., INC.",
        "988",
        "CR-V",
        "1865",
        "2012"
    ],
    "driverError": {
        "code": "ER_DUP_ENTRY",
        "errno": 1062,
        "sqlState": "23000",
        "sqlMessage": "Duplicate entry '5J6RM4H75CL04938' for key 'vehicle_identification_code.IDX_5c685f775091873679074f6467'",
        "sql": "INSERT INTO `vehicle_identification_code`(`id`, `code`, `make`, `make_id`, `manufacturer`, `manufacturer_id`, `model`, `model_id`, `model_year`, `createdDate`, `updatedDate`, `deletedDate`) VALUES ('49c74a4f-fb9b-4555-83bf-f8652c36d37c', '5J6RM4H75CL04938', 'HONDA', '474', 'AMERICAN HONDA MOTOR CO., INC.', '988', 'CR-V', '1865', '2012', DEFAULT, DEFAULT, DEFAULT)"
    },
    "code": "ER_DUP_ENTRY",
    "errno": 1062,
    "sqlState": "23000",
    "sqlMessage": "Duplicate entry '5J6RM4H75CL04938' for key 'vehicle_identification_code.IDX_5c685f775091873679074f6467'",
    "sql": "INSERT INTO `vehicle_identification_code`(`id`, `code`, `make`, `make_id`, `manufacturer`, `manufacturer_id`, `model`, `model_id`, `model_year`, `createdDate`, `updatedDate`, `deletedDate`) VALUES ('49c74a4f-fb9b-4555-83bf-f8652c36d37c', '5J6RM4H75CL04938', 'HONDA', '474', 'AMERICAN HONDA MOTOR CO., INC.', '988', 'CR-V', '1865', '2012', DEFAULT, DEFAULT, DEFAULT)"
}
```

---

## Get a vehicle

**Request:**
`GET /api/v1/vehicle/{vehicle_id}`

```
Header: Authorization Bearer token
```

**Response:**

> success, status = 200 (OK)

```json
{
    "mileage": 1003,
    "color": "#0001111",
    "description": "a new car haha",
    "license_number": "ABC137",
    "registration_number": "ABC137",
    "registration_state": "AC",
    "registration_name": "David dccc",
    "registration_expiry_date": "2001-05-12T00:00:00.000Z",
    "value": 99.987,
    "vehicle_identification_code": {
        "id": "8a140dd0-a3c0-4c60-bf70-c12f797a3511",
        "code": "5J6RM4H75CL04939",
        "make": "HONDA",
        "make_id": "474",
        "manufacturer": "AMERICAN HONDA MOTOR CO., INC.",
        "manufacturer_id": "988",
        "model": "CR-V",
        "model_id": "1865",
        "model_year": "2012",
        "createdDate": "2022-05-03T20:01:04.801Z",
        "updatedDate": "2022-05-03T20:01:04.801Z",
        "deletedDate": null
    },
    "deletedDate": null,
    "id": "162ea7c8-0bbd-499b-9a18-3c4f1f3aa84d",
    "createdDate": "2022-05-03T20:01:04.823Z",
    "updatedDate": "2022-05-03T20:01:04.823Z"
}
```

> fail, status = 400/5xx

```json
{
  "name": "BadRequestError",
  "message": "vehicle_id 162ea7c8-0bbd-499b-9a18-3c4f1f3saa84d was not found",
  "stack": "Error: \n    at new HttpError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/HttpError.ts:16:18)\n    at new BadRequestError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/BadRequestError.ts:10:5)\n    at VehicleController.<anonymous> (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/api/controllers/assessment-entity/vehicle/index.ts:33:13)\n    at Generator.next (<anonymous>)\n    at fulfilled (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/tslib/tslib.js:114:62)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)"
}
```

---

## Delete a vehicle

**Request:**
`DELETE /api/v1/vehicle/{vehicle_id}`

```
Header: Authorization Bearer token
```

**Response:**

> success, status = 200 (OK)

```json
{
  "id": "162ea7c8-0bbd-499b-9a18-3c4f1f3saa84d",
}
```

> fail, status = 400/5xx

```json
{
    "name": "BadRequestError",
    "message": "vehicle_id 162ea7c8-0bbd-499b-9a18-3c4f1f3saa84d was not found",
    "stack": "Error: \n    at new HttpError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/HttpError.ts:16:18)\n    at new BadRequestError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/BadRequestError.ts:10:5)\n    at VehicleController.<anonymous> (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/api/controllers/assessment-entity/vehicle/index.ts:33:13)\n    at Generator.next (<anonymous>)\n    at fulfilled (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/tslib/tslib.js:114:62)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)"
}
```
---

## Update a vehicle

**Request:**
`PUT /api/v1/vehicle/{vehicle_id}`

```
Header: Authorization Bearer token
```

```json
{
  "color": "#FF0000",
  "vehicle_identification_code": "5J6RM4H75CL049398"
}
```

**Response:**

> success, status = 200 (OK)

```json
  {
    "id": "825965d9-1436-4e0b-88ef-ced591bb36ef",
    "mileage": 1003,
    "color": "#0001111",
    "description": "a new car haha",
    "license_number": "ABC135",
    "registration_number": "ABC135",
    "registration_state": "AC",
    "value": 99.987,
    "registration_name": "David dccc",
    "registration_expiry_date": "2001-05-12T00:00:00.000Z",
    "createdDate": "2022-05-03T16:53:37.612Z",
    "updatedDate": "2022-05-03T18:14:01.000Z",
    "deletedDate": null,
    "vehicle_identification_code": {
        "id": "dcaaa3bd-8f2d-47bf-8bc7-cfb20e8ac793",
        "code": "5J6RM4H75CL049398",
        "make": "HONDA",
        "make_id": "474",
        "manufacturer": "AMERICAN HONDA MOTOR CO., INC.",
        "manufacturer_id": "988",
        "model": "CR-V",
        "model_id": "1865",
        "model_year": "2012",
        "createdDate": "2022-05-03T18:14:01.514Z",
        "updatedDate": "2022-05-03T18:14:01.514Z",
        "deletedDate": null
    }
  }
```

> fail, status = 400

```json
{
  "name": "BadRequestError",
  "message": "license number ABC135d should be conisted of 6 characters",
  "stack": "Error: \n    at new HttpError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/HttpError.ts:16:18)\n    at new BadRequestError (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/src/http-error/BadRequestError.ts:10:5)\n    at VehicleController.<anonymous> (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/api/controllers/assessment-entity/vehicle/index.ts:84:15)\n    at Generator.next (<anonymous>)\n    at fulfilled (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/tslib/tslib.js:114:62)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)"
}
```

> fail, status 500
```json
{
    "name": "Error",
    "message": "user error: invalid VIN: , Invalid character(s): 1:@;",
    "stack": "Error: user error: invalid VIN: , Invalid character(s): 1:@;\n    at VehicleIdentificationCodeController.<anonymous> (/Users/marcus.man/Desktop/home/hiring-backend-assessment/src/api/controllers/assessment-entity/vehicle-identification-code/index.ts:61:14)\n    at Generator.next (<anonymous>)\n    at fulfilled (/Users/marcus.man/Desktop/home/hiring-backend-assessment/node_modules/tslib/tslib.js:114:62)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)"
}
```

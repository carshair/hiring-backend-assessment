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
  "vehicle": {
    "mileage": 100,
    "color": "#000000",
    "description": "a new car",
    "license_number": "ABC123",
    "registration_number": "ABC123",
    "registration_state": "CA",
    "registration_expiry_date": "05/12/2000",
    "registration_name": "David d",
    "vehicle_identification_number": "5J6RM4H75CL059384",
  }
}
```

**Response:**

> success, status = 201 (CREATED)

```json
{
  "vehicle": {
    "id": "veh_xxxxxxxxxxxx",
    "mileage": 100,
    "color": "#000000",
    "description": "a new car",
    "license_number": "ABC123",
    "registration_number": "ABC123",
    "registration_state": "CA",
    "registration_expiry_date": "05/12/2000",
    "registration_name": "David d",
    "vehicle_identification_number": "5J6RM4H75CL059384",
  }
}
```

> fail, status = 400/5xx

- 400 for user input validation
- 503 for 3rd party api error

```json
{
  "error": {
    "code": "INVALID_USER_INPUT",
    "message": "license_number should be 6 letter string, consited of 3 number and 3 character",
  }
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
  "vehicle": {
    "id": "veh_xxxxxxxxxxxx"
    "mileage": 100,
    "color": "#000000",
    "description": "a new car",
    "license_number": "ABC123",
    "registration_number": "ABC123",
    "registration_state": "CA",
    "registration_expiry_date": "05/12/2000",
    "registration_name": "David d",
    "vehicle_identification_number": "5J6RM4H75CL059384",
  }
}
```

> fail, status = 400/5xx

```json
{
  "error": {
    "code": "INVALID_USER_INPUT",
    "message": "vehicle id veh_xxxxx not found",
  }
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
  "id": "veh_xxxxxxxxxxxx",
}
```

> fail, status = 400/5xx

```json
{
  "error": {
    "code": "INVALID_USER_INPUT",
    "message": "vehicle id veh_xxxxx not found",
  }
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
  "id": "veh_xxxxxxxxxxxx",
}
```

> fail, status = 400/5xx

```json
{
  "error": {
    "code": "INVALID_USER_INPUT",
    "message": "vehicle id veh_xxxxx not found",
  }
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

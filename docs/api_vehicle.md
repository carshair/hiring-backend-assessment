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
}
```

**Response:**

> success, status = 200 (OK)

```json
  "vehicle": {
    "id": "veh_xxxxxxxxxxxx",
    "mileage": 100,
    "color": "#FF0000",
    "description": "a new car",
    "license_number": "ABC123",
    "registration_number": "ABC123",
    "registration_state": "CA",
    "registration_expiry_date": "05/12/2000",
    "registration_name": "David d",
    "vehicle_identification_number": "5J6RM4H75CL059384",
  }
```

> fail, status = 400/5xx

```json
{
  "error": {
    "code": "INVALID_USER_INPUT",
    "message": "improper color format",
  }
}
```

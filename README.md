# carSHAiR Backend Assessment

## Assumptions

- Cars are not owned by users, so no authorization is needed to read, create, update or delete a car resoruce.
- A VIN is unique, which cannot be shared by multiple vehicles.
- A license plate is unique, which cannot be shared by multiple vehicles.
- The format of license plate must be consisted of 6 characters (length must be 6), no matter which issuing country it belongs to.
- Registration number should be same as license plate number.
- An invalidate VIN means the VIN cannot be decoded by Decode VIN api (Third-Party api)(<https://vpic.nhtsa.dot.gov/api/>)
- Registration expiration only accept date format in MM/DD/YY
- Car value cannot be a negative number.
- Current mileage cannot be a negative number.
- Name of registration cannot be empty and no more than 128 characters.
- Vehicle description can be null or no more than 10240 characters.
- Vehicle color only accept HTML color codes format (two digit hexadecimal format).
- Vehicle Identification Code object cannot exist without Vehicle object

## Goal and requirements

- System should be able to create, read, update, delete for a car resource.
- System should be able to decode the VIN.
- System should be able to validate the VIN format by calling (Third-Party api) and check whether the VIN has already existed in the database.
- System should be able to store the decoded VIN information into database.

## UML Diagram
![Alt text](./uml.png "UML Diagram")

## API Document
[Vehicle Api Doc](./docs/api_vehicle.md)

## Getting Started

1. Bring up the MySQL database
```
  docker compose up
```

2. Bring up express server in development mode
```
  yarn install
  yarn run dev
```

3. Create vehicle
```
  sh ./script/create_vehicle.sh
```

4. Get vehicle (need to modify vehicle_id inside script)

```
  sh ./script/get_vehicle.sh
```

5. Update vehicle (need to modify vehicle_id inside script)

```
  sh ./script/update_vehicle.sh
```

6. Delete vehicle (need to modify vehicle_id inside script)

```
  sh ./script/delete_vehicle.sh
```


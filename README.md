# carSHAiR Backend Assessment

## Assumptions

- Cars are not owned by users, so no authorization is needed to read, create, update or delete a car resoruce.
- A VIN is unique, which cannot be shared by multiple vehicles.
- A license plate is unique, which cannot be shared by multiple vehicles.
- The format of license plate must be consisted of 6 characters (3 letters and 3 digits), no matter which issuing country it belongs to.
- Registration number should be same as license plate number.
- Registration state only available to (CA California	and NJ New Jersey)
- An invalidate VIN means the VIN cannot be decoded by Decode VIN api (Third-Party api)(<https://vpic.nhtsa.dot.gov/api/>)
- Registration expiration only accept date format in MM/DD/YY
- Car value cannot be a negative number.
- Current mileage cannot be a negative number.
- Name of registration cannot be empty and no more than 128 characters.
- Vehicle description can be null or no more than 10240 characters.
- Vehicle color only accept HTML color codes format (two digit hexadecimal format).

## Goal and requirements

- System should be able to create, read, update, delete for a car resource.
- System should be able to decode the VIN.
- System should be able to validate the VIN format by calling (Third-Party api) and check whether the VIN has already existed in the database.
- System should be able to store the decoded VIN information into database.

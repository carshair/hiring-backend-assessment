curl --location --request POST 'localhost:8889/api/v1/vehicle' \
--header 'Authorization: Bearer abcd' \
--header 'Content-Type: application/json' \
--data-raw '{
  "mileage": 100.13,
  "color": "#000000",
  "description": "a new car",
  "license_number": "ABC133",
  "registration_number": "ABC133",
  "registration_state": "CA",
  "registration_expiry_date": "05/12/2000",
  "registration_name": "David d",
  "value": 999.99,
  "vehicle_identification_number": "5J6RM4H75CL059384"
}'
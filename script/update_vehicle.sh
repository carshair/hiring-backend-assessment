curl --location --request PUT 'localhost:8889/api/v1/vehicle/9ae5456e-0225-4001-b0d4-330023fde7bb' \
--header 'Content-Type: application/json' \
--data-raw '{
  "mileage": 1003,
  "color": "#0001111",
  "description": "a new car haha",
  "license_number": "ABC135",
  "registration_number": "ABC135",
  "registration_state": "AC",
  "registration_expiry_date": "05/12/2001",
  "registration_name": "David dccc",
  "vehicle_identification_number": "5J6RM4H75CL049399"
}'
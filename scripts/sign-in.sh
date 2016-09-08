#!/bin/bash

curl --include --request POST http://tic-tac-toe.wdibos.com/sign-in \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "tuck@rosebrock.com",
    "password": "123"
  }
}'

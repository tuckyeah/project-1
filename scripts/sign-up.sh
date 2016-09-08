#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "tuck@rosebrock.com",
    "password": "123",
    "password_confirmation": "123"
  }
}'

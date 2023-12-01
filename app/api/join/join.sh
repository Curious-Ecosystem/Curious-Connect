#!/bin/bash

API_KEY_SECRET="curiousconnectsfu_default_secret"
#CURIOUSCONNECT_URL="https://curiousconnect.connect/api/v1/join"
CURIOUSCONNECT_URL="http://localhost:3010/api/v1/join"

curl $CURIOUSCONNECT_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --data '{"room":"test","roomPassword":"false","name":"curiousconnectsfu","audio":"true","video":"true","screen":"false","hide":"false","notify":"true"}' \
    --request POST
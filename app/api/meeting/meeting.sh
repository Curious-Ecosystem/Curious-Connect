#!/bin/bash

API_KEY_SECRET="curiousconnectsfu_default_secret"
CURIOUSCONNECT_URL="https://curiousconnect.connect/api/v1/meeting"
# CURIOUSCONNECT_URL="http://localhost:3010/api/v1/meeting"

curl $CURIOUSCONNECT_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --request POST
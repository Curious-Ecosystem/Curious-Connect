# pip3 install requests
import requests
import json

API_KEY_SECRET = "curiousconnectsfu_default_secret"
CURIOUSCONNECT_URL = "https://curiousconnect.connect/api/v1/meeting"
# CURIOUSCONNECT_URL = "http://localhost:3010/api/v1/meeting"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

response = requests.post(
    CURIOUSCONNECT_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])

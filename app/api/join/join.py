# pip3 install requests
import requests
import json

API_KEY_SECRET = "curiousconnectsfu_default_secret"
#CURIOUSCONNECT_URL = "https://curiousconnect.connect/api/v1/join"
CURIOUSCONNECT_URL = "http://localhost:3010/api/v1/join"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

data = {
    "room": "test",
    "roomPassword": "false",
    "name": "curiousconnectsfu",
    "audio": "true",
    "video": "true",
    "screen": "true",
    "hide": "false",
    "notify": "true",
}

response = requests.post(
    CURIOUSCONNECT_URL,
    headers=headers,
    json=data,
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("join:", data["join"])

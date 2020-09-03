import os

from flask import Flask
from requests import get

app = Flask(__name__)

KEY = os.environ["API_KEY"]
LAT = 30.45
LON = -91.8
EXCLUDE = "minutely,hourly,daily"
UNITS = "imperial"
URL = "https://api.openweathermap.org/data/2.5/onecall?"\
    f"lat={LAT}&lon={LON}"\
    f"&exclude={EXCLUDE}"\
    f"&units={UNITS}"\
    f"&appid={KEY}"

@app.route("/api/current", methods=["GET"])
def get_current():
    r = get(URL)
    return r.json()

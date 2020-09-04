from os import environ

from flask import Flask, Blueprint
from requests import get

from api.common import url

KEY = environ["API_KEY"]
LAT = 30.45
LON = -91.8
EXCLUDE = "minutely,hourly,daily"
UNITS = "imperial"
URL = "https://api.openweathermap.org/data/2.5/onecall?"\
    f"lat={LAT}&lon={LON}"\
    f"&exclude={EXCLUDE}"\
    f"&units={UNITS}"\
    f"&appid={KEY}"

current = Blueprint('current', __name__)

@current.route("/api/current", methods=["GET"])
def get_current():
    r = get(URL)
    return r.json()
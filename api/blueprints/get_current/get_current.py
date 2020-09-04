from os import environ
import json

from flask import Flask, Blueprint
from requests import get

from api.common import url_gen


EXCLUDE = "minutely,hourly,daily"

current = Blueprint('current', __name__)

@current.route("/api/current", methods=["GET"])
def get_current():
    r = get(url_gen(EXCLUDE))
    d = r.json()["current"]

    data = {
       "clouds": d["clouds"],
       "feels_like": d["feels_like"],
       "humidity": d["humidity"],
       "wind_speed": d["wind_speed"]
    }

    return data
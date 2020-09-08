from os import environ
import json
from datetime import datetime, timedelta

from flask import Flask, Blueprint, jsonify
from requests import get

from api.common import url_gen


EXCLUDE = "current,minutely,hourly"

next_seven = Blueprint('next_seven', __name__)


@next_seven.route("/api/nextseven", methods=["GET"])
def nextseven():
    r = get(url_gen(EXCLUDE))
    week = r.json()["daily"]

    data = []
    day = {}

    for i in range(len(week)):
        day["date"] = datetime.fromtimestamp(week[i]['dt'])
        day["clouds"] = week[i]["clouds"]
        day["percip"] = week[i]["pop"]*100
        day['feels_like'] = week[i]['feels_like']
        day["humidity"] = week[i]["humidity"]
        day["wind_speed"] = week[i]["wind_speed"]

        day_copy = day.copy()
        data.append(day_copy)

    return jsonify(data)
    # return jsonify(week)

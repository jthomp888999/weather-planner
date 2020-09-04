from os import environ

from flask import Flask, Blueprint
from requests import get

from api.common import url_gen


EXCLUDE = "minutely,hourly,daily"

current = Blueprint('current', __name__)

@current.route("/api/current", methods=["GET"])
def get_current():
    r = get(url_gen(EXCLUDE))
    return r.json()
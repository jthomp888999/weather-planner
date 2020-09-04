from os import environ
import json

from flask import Flask, Blueprint
from requests import get

from api.common import url_gen


EXCLUDE = "current,minutely,hourly"

next_seven = Blueprint('next_seven', __name__)

@next_seven.route("/api/nextseven", methods=["GET"])
def nextseven():
    r = get(url_gen(EXCLUDE))
    d = r.json()

    data = {"test": "it works i guess"}

    return d
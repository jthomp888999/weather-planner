from os import environ

def url_gen(exclude=None):
    KEY = environ["API_KEY"]
    LAT = 30.45
    LON = -91.8

    if exclude:
        EXCLUDE = exclude
    else:
        EXCLUDE = "minutely,hourly,daily"

    UNITS = "imperial"
    URL = "https://api.openweathermap.org/data/2.5/onecall?"\
        f"lat={LAT}&lon={LON}"\
        f"&exclude={EXCLUDE}"\
        f"&units={UNITS}"\
        f"&appid={KEY}"

    return URL

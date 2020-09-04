from flask import Flask

from api.blueprints import current
from api.blueprints import next_seven

app = Flask(__name__)

app.register_blueprint(current)
app.register_blueprint(next_seven)
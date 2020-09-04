from flask import Flask

from api.blueprints import current

app = Flask(__name__)

app.register_blueprint(current)
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# flask_app/database.py
from flask_app.extensions import db, migrate



db = SQLAlchemy()
migrate = Migrate()


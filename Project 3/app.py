import pandas as pd
import numpy as np
import datetime as dt

from matplotlib import style
import matplotlib.pyplot as plt

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

import flask
from flask import Flask,jsonify, render_template,json

engine = create_engine("postgresql+psycopg2://postgres:OmamoriHimari9@localhost:5432/plspls")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
vehicles = Base.classes.electricvehicles

session = Session(engine)


# Query all info
results = session.query(vehicles.datayear, vehicles.county, vehicles.dashboardfueltypegroup,
                            vehicles.fueltype,vehicles.manufacturer,vehicles.model,vehicles.numberofvehicles).all()

session.close()

all_vehicles = []
for datayear,county,dashboardfueltypegroup,fueltype,manufacturer,model,numberofvehicles in results:
    vehicles_dict={}
    vehicles_dict["datayear"] = datayear
    vehicles_dict['county'] = county
    vehicles_dict['dashboardfueltypegroup'] = dashboardfueltypegroup
    vehicles_dict['fueltype'] = fueltype
    vehicles_dict['manufacturer'] = manufacturer
    vehicles_dict['model'] = model
    vehicles_dict['numberofvehicles'] = numberofvehicles
    all_vehicles.append(vehicles_dict)

#################################################
# Flask Setup
#################################################


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html',all_vehicles = all_vehicles)
    

@app.route('/about')
def overall ():

    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)
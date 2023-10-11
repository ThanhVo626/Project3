# Project3

Thanh , Derek, Jorge

Tools we used
Flask
SQL
SQLAlchemy
Pandas
D3
Plotly
Bootstrap

The first step was finding what kind of data set we wanted. Originally we wanted to go with soccer, however we couldnt find a dataset that didnt have a lot of missing information so we decided to go with Zero Emission Vehicles in California from 2010-2022 from Kaggle.
https://www.kaggle.com/datasets/natalyamatyushenko/zero-emission-vehicle-population-in-california

After obtaining our dataset we cleaned and filtered it through Jupyter Notebook and exported it as a csv. Then we took the csv and imported it into SQL after setting up the tables. Once we finished with that our next step was to set up flask and sqlalchemy in order to read in the sql file. Initally we had trouble setting up the engine connection because we were missing psycopg2 but after we figured it out it was fairly simple. We would then query the data from the file and save it into a list. Furthermore we setup our routes and rendered in different html templates. In order to bring over the data to html and JS we had to include the list inside the render_template.

Our html setup is pretty simple. We put links and scripts to things we needed but we had to figure out how to read our all_vehicles list, which was by converting into a json file with a script. The body is basic formatting of where we want it and certain styles. One of the big troubles we had was providing the script to our JS file later on. I wasn't used to having a static folder and the formatting was different so it took some time.

In order to get the data to JS we had to JSON.parse our data to make it a list instead of strings of the list. Next we had to start pulling information that we needed out of the list so we did a for loop in order to go through each dictionary and pull the information that met the requirements. In additonal we had to multiple by number of vehicles because each entry represented the total amount of each county in a specific year, not specific indiviudal cars. We had to retrospectively implement this because we didn't fully grasp out dataset. After that we setup the information we extracted into the requirements for the plots. Then we had to setup d3 to update the select in order to change the plots based off year. This was initially a problem and I was manually doing it but I managed to create some functions to make it slightly quicker.

Once we were finished with that we just made sure everything was in order and tried to work on the about page but didnt have enough time to finish. Our dataset also had zipcodes which we could have used to create a heat map to make it more easily digestable. Nevertheless we didnt have enough time.





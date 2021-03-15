# AQI2020-D3map

Abstract:
There was a large magnitude of wildfires across the west during 2020, and this project visualizes how this affected air quality across neighboring states. Each color represents a certain range on the Air Quality Index (AQI), as measured by PM2.5 (2.5 micrometers in particle size). PM2.5 can travel deep into the lungs, having serious health consequences. With increasing temperature due to climate change, the west becomes particularly susceptible to repeated wildfires, and therefore health risks that may inevitably lead to a climate driven emigration. Visualizing the affected regions could help future planners anticipate population density changes within the U.S.


Further detail:
This project was selected due to the magnitude of the wildfires across the west during 2020, and I wished to see how this affected air quality across neighboring states. I used D3.js to create the map, HTML + CSS to create the slider function, and Bokeh (in python) to create the plots below the map. All of these can help illustrate how certain fires affected different states and/or regions. 

Air quality was measured every day from 1/1/2020 - 10/31/2020. I sub-selected the data to only include data that was Particulate Matter 2.5 (PM 2.5), meaning the particles are 2.5 micrometers in size. Because the particles are so small, PM2.5 can travel deep into the lungs, having serious health consequences. They are also the size range that cause the air to look hazy and slightly obscure sunshine. The data set was taken from https://aqs.epa.gov/aqsweb/airdata/download_files.html, and came with individual county data. I averaged all the counties in each state to give it one daily value, as I did not have a packages in D3.js to place the data in each county. 

I chose D3.js because I could build a map to visualize the air quality and color it according to the standard Air Quality Index (AQI). I chose Bokeh because I was interested in the feature where one could highlight certain points on one state plot and it would show the corresponding values on other state's plots. This could be helpful identifying how certain spikes in one state might affect neighboring states.

I developed the D3.js map by altering the code shown http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922. There was a bit of data cleaning/ reorganizing that needed to occur, as the original data set would not have served my purpose. I first converted all of the Date values from strings to numbers. I then averaged all of the daily county data into one daily state value. Using this, I then converted each Air Quality value into a word according to the AQI (0-50 = Good etc), and created a new dataframe. I used this new data frame to populate the data in my D3.js map. I used the daily state data frame to create the Bokeh map. \

To use this visualization, simply drag the slider across to change the days. If you find a certain string of days that seem interesting, you can go to the Bokeh plot below to look at the values and see how they might change across the different states. 

Further work includes - adding data for 2005, 2010 and 2015 to identify any trends over time, adding in individual counties to show intra-state differences, combining this data set with COVID-19 death/hospitalization rates in each county over time to identify if there is any correlation between air quality and covid severity. 

Additionally, the poor air quality across the US could have exasperated the pandemic death tolls, as COVID-19 can be very deadly for people who have lung issues.

Air quality was measured every day from 1/1/2020 - 10/31/2020. I sub-selected the data to only include data that was Particulate Matter 2.5 (PM 2.5), meaning the particles are 2.5 micrometers in size. Because the particles are so small, PM2.5 can travel deep into the lungs, having serious health consequences. They are also the size range that cause the air to look hazy and slightly obscure sunshine. The data set was taken from https://aqs.epa.gov/aqsweb/airdata/download_files.html (EPA), and came with individual county data. I averaged all the counties in each state to give it one daily value, as I did not have a packages in D3.js to place the data in each county. 

I chose D3.js because I could build a map to visualize the air quality and color it according to the standard Air Quality Index (AQI). I chose Bokeh because I was interested in the feature where one could highlight certain points on one state plot and it would show the corresponding values on other state's plots. This could be helpful identifying how certain spikes in one state might affect neighboring states.

I developed the D3.js map by altering the code shown http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922. There was a bit of data cleaning and reorganizing that needed to occur, as the original data set would not have served my purpose. I first converted all of the Date values from strings to numbers. I then averaged all of the daily county data into one daily state value. Using this, I then converted each Air Quality value into a word according to the AQI (0-50 = Good etc), and created a new dataframe. I used this new data frame to populate the data in my D3.js map. I used the daily state data frame to create the Bokeh map. 

To use this visualization, simply drag the slider across to change the days. If you find a certain string of days that seem interesting, you can go to the Bokeh plot below to look at the values and see how they might change across the different states. 

Further work includes - adding data for 2005, 2010 and 2015 to identify any trends over time, adding in individual counties to show intra-state differences, combining this data set with COVID-19 death/hospitalization rates in each county over time to identify if there is any correlation between air quality and covid severity. 

Additionally, the poor air quality across the US could have exasperated the pandemic death tolls, as COVID-19 can be very deadly for people who have lung issues.


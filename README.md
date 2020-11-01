Dear professor 
<br>This is my old project [here](https://github.com/dralmadani/Data_Visualization)

The new project is here (this note will remove on 3 Nov 2020 or before) 
--------------------------
# Data Visualization Project
Data visualization project proposal

----
## Data

1- The full data I propose to visualize for my project is about [the number of completed highest structures in the world cities](https://gist.github.com/dralmadani/aa84bd8088038464b94ef3c454b30f4d). Building greater than 100 meters was counted on the world map. 

 * Height represents the number of buildings.
 * Color represents the city.

2- Country boundaries from [World Atlas TopoJSON](https://github.com/topojson/world-atlas), polished for visual style, including graticules.

3- Colors inspired by [UNHCR Streamgraph Explorer](https://github.com/unhcr/dataviz-streamgraph-explorer/blob/7f30a1ff0157e031c74837294b170641f98a9c04/src/colorScale.js).

#### Structure of my data:
<br>[Cities Ranked by Number of Completed Structures](https://gist.github.com/dralmadani/aa84bd8088038464b94ef3c454b30f4d).
- You can find the original data for Cities Ranked by Number of Completed Buildings on [the skyscraper center](http://www.skyscrapercenter.com/cities)
- I add Latitude and Longitude one by one by using [Latitude and Longitude Finder](https://www.latlong.net/)
- I add the date for the First 150m+ Building by checking each city through [the skyscraper center](http://www.skyscrapercenter.com/cities) website.
note: I am still working on latitude and longitude for every city. (last update 1 Nov  2020)
I build a new Dataset.
<div>
<img src="https://user-images.githubusercontent.com/25451974/97807483-24b7d480-1c2f-11eb-955a-002b758b7212.png" width="100"/>
</div>

#### The attribute
1- Rank
<br> 2- City
<br> 3- Country
<br> 4- AllBuilding: Number of building in the city
<br> 5- 100m: Building has 100m+
<br> 6- 200m: Building has 200m+
<br> 7- 300m: Building has 300m+
<br> 8- TelecomTowers: Radio masts and towers are typically tall structures designed to support antennas for telecommunications and broadcasting
<br> 9- AllStructures: All structures
<br> 9- lat: Latitude
<br> 9- lng: Longitude
<br> 9- first150m: the year of the first building higher than 150m+


----
## Prototypes

I’ve created a proof of concept visualization of this data. It's a ... and it shows ...
[![image](https://user-images.githubusercontent.com/25451974/97809840-8848fe80-1c3d-11eb-8e4e-993d8c1ce517.png)](https://vizhub.com/dralmadani/538256d9d86047838d467f643a7cd303)

In the second visualization, I choose the top 10 ranks  to show  the population 
[![image](https://user-images.githubusercontent.com/25451974/95655340-8f646d00-0ad4-11eb-92e4-9f9d621b9fdb.png)](https://vizhub.com/dralmadani/ea118a8b9c9d4c8d990217c1d9a01504)

In the third visualization, I created a menu to let the user choose the available years, density and land area
[![image](https://user-images.githubusercontent.com/25451974/95655127-24fefd00-0ad3-11eb-82ab-b9c049293f7c.png)](https://vizhub.com/dralmadani/8de8cbc5b9f1491b97cdb862986fdcd8)

1st draft for Cities on the world map, later will improve to be on the USA map only

[![image](https://user-images.githubusercontent.com/25451974/96008461-96111e00-0e0d-11eb-882e-0416c9019fb9.png)](https://vizhub.com/dralmadani/5c80609b59f64ca3b788abe0517ef96e)

Cities on the USA map

[![image](https://user-images.githubusercontent.com/25451974/96820262-9e5fef00-13f3-11eb-97e4-46bdc273ad5d.png)](https://vizhub.com/dralmadani/e9a2b6197eb14b87aafbc85a09b90fe8)




enjoy looking at this graph :)

This visualization focuses on
- City
- State
- population 2010: the population in 2020
- population 2020: the population in 2020
- Density and Area

----
## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

  * What are the top 200 largest cities in the USA in 2020 by population?
  * What are the top ten largest cities in the US by population in 2020 by population?
  * What are the top ten largest cities in the US by population in 2020 by density?
  * What are the top ten largest cities in the US by population in 2020 by area?
  * Which state has the largest cities?
  * How many large cities population in each state?
  
----  
## Sketches


![image](https://user-images.githubusercontent.com/25451974/94355532-d2453000-0052-11eb-947c-72aa9f4e6fd9.png)

<br><br><br>

![01TopCitiesSketching](https://user-images.githubusercontent.com/25451974/94355734-a3c85480-0054-11eb-87f0-bb188d87a195.jpeg)
<br>This is the first sketching about my project and I hope those sketches drive the visualization.

![02TopCitiesSketching](https://user-images.githubusercontent.com/25451974/94355741-acb92600-0054-11eb-9547-0d33945ba4fe.jpeg)
<br>
General visualization for top cities by population then top states having those cities 

![03TopCitiesSketching](https://user-images.githubusercontent.com/25451974/94355743-b17dda00-0054-11eb-8ab7-86bc8c2504fc.jpeg)
<br>
Tring to show city name and population also, places in the USA map

----
## Open Questions


  - I'm not sure where to get the geographic shapes to build a map from this data
  - I'm not sure how to get movement visualization to show the difference between the population from 2010 to 2020 for each city

----
## Schedule of Deliverables

<table>
<thead>
<tr>
<th>Time 
 Required
 (in Hours)</th>
<th>Task</th>
<th>estimate deliver date</th>
 <th>Done</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Changing attribute: trining to change some attribute as a text to numbers to deal with it</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>
</tr>
 
<tr>
<td>3</td>
<td>Adding a menu to my project with respect to the categorical and numerical data</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>
<tr>
<td>2</td>
<td>1st draft for Cities on the world map</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>




<tr>
<td>3</td>
<td>Making aggregation for city and state</td>
<td>21-10-2020</td> 
<td> :heavy_check_mark:</td>


</tr>

<tr>
 <td>1</td>
<td>adding latitude and longitude to my dataset</td>
<td>21-10-2020</td>
<td> :heavy_check_mark: </td>

</tr>

<tr>
<td>5</td>
<td>Point the population on the USA map</td>
<td>28-10-2020</td>
 <td> :heavy_check_mark: </td>

</tr>

<tr>
<td>1</td>
<td>Update the menu code</td>
<td>28-10-2020</td>
 <td> </td>

</tr>

<tr>
<td>1</td>
<td>Adding X title and Y title for the chart</td>
<td>4-11-2020</td>
 <td> </td>
</tr>

<tr>
<td>3</td>
<td>Making some movement on my visualization</td>
<td>4-11-2020</td>
 <td> </td>

</tr>

<tr>
<td>4</td>
<td>Complete the project and removing all comments code and checking spelling or grammaticl errors</td>
<td>11-11-2020</td>
 <td> </td>

</tr>
 
</tbody>
</table>

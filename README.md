Dear professor 
<br>This is my old project [here](https://github.com/dralmadani/Data_Visualization)

The new project is here (this note will remove on 3 Nov 2020 or before) 
--------------------------
# Data Visualization Project
Data visualization project proposal

<div>
<a href="https://vizhub.com/dralmadani/d27c1b4baee44b0884b08a3754ab0ad5"> <p  align="center">
<img src="https://user-images.githubusercontent.com/25451974/98025404-9fbbef00-1dd7-11eb-8394-f5ec6e8b8bb6.jpg" width="500" />
 </p> </a>
</div>

----
## Data

1- The full data I propose to visualize for my project is about [the number of completed highest structures in the world cities](https://gist.github.com/dralmadani/aa84bd8088038464b94ef3c454b30f4d). Building greater than 100 meters was counted on the world map. 

 * Height represents the number of buildings.
 * Color represents the rank.

2- Country boundaries from [World Atlas TopoJSON](https://github.com/topojson/world-atlas), polished for visual style, including graticules.

3- Colors inspired by [UNHCR Streamgraph Explorer](https://github.com/unhcr/dataviz-streamgraph-explorer/blob/7f30a1ff0157e031c74837294b170641f98a9c04/src/colorScale.js).

### Structure of my data:
[Cities Ranked by Number of Completed Structures](https://gist.github.com/dralmadani/aa84bd8088038464b94ef3c454b30f4d).
- You can find the original data for Cities Ranked by Number of Completed Buildings on [the skyscraper center](http://www.skyscrapercenter.com/cities)
- I add Latitude and Longitude one by one by using [Latitude and Longitude Finder](https://www.latlong.net/)
- I add the date for the First 150m+ Building by checking each city through [the skyscraper center](http://www.skyscrapercenter.com/cities) website.
I build a new Dataset with latitude and longitude and the year of the first 150m building in each city.
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
[![image](https://user-images.githubusercontent.com/25451974/97823493-2b723600-1c87-11eb-9fc3-e5c46094c81f.png)
](https://vizhub.com/dralmadani/538256d9d86047838d467f643a7cd303)

In the second visualization, I choose the top 10 ranks  to show  the population 
[![image](https://user-images.githubusercontent.com/25451974/95655340-8f646d00-0ad4-11eb-92e4-9f9d621b9fdb.png)](https://vizhub.com/dralmadani/ea118a8b9c9d4c8d990217c1d9a01504)

In the third visualization, I created a menu to let the user choose the available years, density and land area
[![image](https://user-images.githubusercontent.com/25451974/95655127-24fefd00-0ad3-11eb-82ab-b9c049293f7c.png)](https://vizhub.com/dralmadani/8de8cbc5b9f1491b97cdb862986fdcd8)

Cities on the world map show the number of skyscraper
[![image](https://user-images.githubusercontent.com/25451974/97822920-62dfe300-1c85-11eb-861a-5b1d8a78cc91.png)](https://vizhub.com/dralmadani/7fe28642bfcc4ca882f678e0295910f6)

In this visualization, I created a multi-view by merging the histogram and the world map into one view
[![image](https://user-images.githubusercontent.com/25451974/98036145-87ec6700-1de7-11eb-81ca-8214d3db4c62.png)](https://vizhub.com/dralmadani/d27c1b4baee44b0884b08a3754ab0ad5)


Multiple views with brushing. This will help to see when a city build its first skyscraper.


[![image](https://user-images.githubusercontent.com/25451974/96820262-9e5fef00-13f3-11eb-97e4-46bdc273ad5d.png)](https://vizhub.com/dralmadani/e9a2b6197eb14b87aafbc85a09b90fe8)




enjoy looking at this graph :)

This visualization focuses on
- City
- The number of skyscrapers
- The first skyscraper in the city (year)

----
## Questions & Tasks

The following tasks and questions will drive the visualization and interaction decisions for this project:

  * How many skyscrapers in a city?
  * Whare are the most skyscrapers in the world? 
  * When the city build the fist skyscraper ?
  * When the world had an increase in the building of skyscrapers? 
  * etc
  
  
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

![DV_01](https://user-images.githubusercontent.com/25451974/97880707-7fb10080-1cef-11eb-8d8c-ce90e8562814.jpeg)
<br>This is the first sketching about my project and I hope those sketches drive the visualization.

![DV_02](https://user-images.githubusercontent.com/25451974/97880931-bf77e800-1cef-11eb-9342-53ba0200412a.jpeg)
<br>
General visualization for cities that have skyscrapers on the world.

![DV_03](https://user-images.githubusercontent.com/25451974/97881123-fe0da280-1cef-11eb-9c25-d27eb88aac32.jpeg)
<br>
Tried to know some positive point to do and some difficulties YOU may faces during the project.

----
## future works
- add a menu to classified the skyscraper in the cities.



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
<td>Changint a few attribute type from text to numbers to deal with it</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>
</tr>
 

<tr>
<td>4</td>
<td>Adding the date for first buildig in the city</td>
<td>21-10-2020</td>
 <td> :heavy_check_mark:</td>
 </tr>


<tr>
<td>3</td>
<td>Making histogram</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>
<tr>
<td>4</td>
<td>Adding latidute and longtute to my dataset</td>
<td>21-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>


<tr>
<td>4</td>
<td>Making bubble map for my data</td>
<td>21-10-2020</td> 
<td> :heavy_check_mark:</td>

</tr>

<tr>
 <td>2</td>
<td>Changing the Bubble to Mountain (triangle)</td>
<td>28-10-2020</td>
<td> :heavy_check_mark: </td>

</tr>

<tr>
<td>5</td>
<td>Making a multi-view ( merging histogram and the map in one view)</td>
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

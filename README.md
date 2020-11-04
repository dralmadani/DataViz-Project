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
<br> 5- 150m: Building has 150m+
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
[![image](https://user-images.githubusercontent.com/25451974/98057244-d6156080-1e0f-11eb-834e-514cbcb1fb5b.png)](https://vizhub.com/dralmadani/538256d9d86047838d467f643a7cd303)


Cities on the world map show the number of skyscraper
[![image](https://user-images.githubusercontent.com/25451974/97822920-62dfe300-1c85-11eb-861a-5b1d8a78cc91.png)](https://vizhub.com/dralmadani/7fe28642bfcc4ca882f678e0295910f6)

In this visualization, I created a multi-view by merging the histogram and the world map into one view
[![image](https://user-images.githubusercontent.com/25451974/98057145-92225b80-1e0f-11eb-8f5c-609ceaaa7dab.png)](https://vizhub.com/dralmadani/d27c1b4baee44b0884b08a3754ab0ad5)


Multiple views with brushing. This will help to see when a city build its first skyscraper.
[![ multi-view](https://user-images.githubusercontent.com/25451974/98118821-c7fc2a00-1e79-11eb-9359-0ea938d61bec.jpeg)](https://vizhub.com/dralmadani/d27c1b4baee44b0884b08a3754ab0ad5)

[![image](https://user-images.githubusercontent.com/25451974/98137778-5ed3e100-1e90-11eb-8de4-8e947282cff7.png)](https://vizhub.com/dralmadani/d27c1b4baee44b0884b08a3754ab0ad5)



----
## Questions & Tasks


The following tasks and questions will drive the visualization and interaction decisions for this project:

  * How many skyscrapers in a city?
  * Whare are the most skyscrapers in the world? 
  * Where are the most skyscrapers in the world?
  * When did the city build the first skyscraper?
  * When did the world has an increase in the building of skyscrapers?
  * etc
  
  
----  
## Sketches

[![image](https://user-images.githubusercontent.com/25451974/98137051-91310e80-1e8f-11eb-9d1d-ac3f7a7ad4a5.png](https://vizhub.com/dralmadani/d27c1b4baee44b0884b08a3754ab0ad5)

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
## Schedule of Deliverables

<table>
<thead>
<tr>
<th>Time 
 Required
 (in Hours)</th>
<th>Task</th>
<th>Estimate deliver date</th>
 <th>Done</th>
</tr>
</thead>
<tbody>
<tr>
<td>2</td>
<td>Searching for a good dataset</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>
</tr>
 

<tr>
<td>1</td>
<td>Changing some attributes type from text to number to deal with it</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>
 </tr>


<tr>
<td>3</td>
 <td>Adding the date for the first building in the city</td>
<td>14-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>
<tr>
<td>4</td>
<td>Making a histogram</td>
<td>21-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>
<tr>
<td>1</td>
<td>Adding X title and Y title for the chart</td>
<td>21-10-2020</td>
 <td> :heavy_check_mark:</td>

</tr>

<tr>
<td>3</td>
 <td>Adding latitude and longitude to my dataset</td>
<td>28-10-2020</td> 
<td> :heavy_check_mark:</td>

</tr>

<tr>
 <td>3</td>
<td>Making a bubble map for my data</td>
<td>28-10-2020</td>
<td> :heavy_check_mark: </td>

</tr>

<tr>
<td>2</td>
<td>Changing the bubble to mountain (Triangle)</td>
<td>28-10-2020</td>
 <td> :heavy_check_mark: </td>

</tr>

<tr>
<td>4</td>
<td>Making a multi-view ( merging the histogram and the map in one view)</td>
<td>4-11-2020</td>
 <td> :heavy_check_mark:</td>

</tr>


<tr>
<td>2</td>
<td>Record a vidio for the project and uploded in youtube</td>
<td>4-11-2020</td>
 <td> :heavy_check_mark:</td>

</tr>

<tr>
<td>4</td>
<td>Record a video for the project and uploaded to youtube</td>
<td>4-11-2020</td>
 <td> :heavy_check_mark:</td>

</tr>
<tr>
<td>1</td>
<td>Project completion and closing</td>
<td>5-11-2020</td>
 <td> :heavy_check_mark:</td>

</tr>
 
</tbody>
</table>

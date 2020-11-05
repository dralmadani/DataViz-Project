import { useState, useEffect } from 'react';
import { csv, descending } from 'd3';

const csvUrl ='https://gist.githubusercontent.com/dralmadani/aa84bd8088038464b94ef3c454b30f4d/raw/Cities_Ranked_by_Number_of_Completed_Structures.csv';
const row = (d) => {
  d.lat = +d.lat;
  d.lng = +d.lng;
 // d.population = +d.AllBuilding;
  d.AllBuilding = +d.AllBuilding
  

  d.TelecomTowers = +d.TelecomTowers;
  d['100m'] = +d['100m']
  d['150m'] = +d['150m']
  d['200m'] = +d['200m']
  d['300m'] = +d['300m']
  d.Rank = +d.Rank
  d.AllStructures = +d.AllStructures
  //d['Reported Date'] = new Date(d['first150m']);
 // d.first150m = new Date(d['first150m']);
    d.first150m = new Date(d.first150m,0);
        //d.Year = new Date(d.Year, 0);


  //d.first150m = new Date(d['first150m']);
  d['Reported Date'] = new Date(d.first150m);

  
  return d;
};

export const useCities = () => {
  const [data, setData] = useState(null);
//console.log(data);

  useEffect(() => {
    csv(csvUrl, row).then((data) =>
      setData(data.sort((a, b) => descending(a.lat, b.lat)))
    );
  }, []);

  return data;
};
//console.log(data);
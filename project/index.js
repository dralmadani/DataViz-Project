import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import { scaleLinear, scaleOrdinal, max, hcl } from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useCities } from './useCities';
import { BubbleMap } from './BubbleMap/index';
import { DateHistogram } from './DateHistogram/index';

const width = 960;
const height = 500;
const dateHistogramSize = 0.2;
  const xValue = (d) => d.first150m; //d['100m'];


//const heightValue = (d) => d.AllBuilding;
//const maxHeight = 120;

//const colorValue = (d) => d.Rank;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const data = useCities();
  const [brushExtent,setBrushExtent] = useState();
  

  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }
  
  const filteredData = brushExtent ? data.filter(d => {
    const date = xValue(d);
    return date > brushExtent[0] && date < brushExtent[1];
  }): data;

  return (
    <svg width={width} height={height}>
      <BubbleMap
        worldAtlas={worldAtlas}
        data={data} 
        filteredData = {filteredData}
        //heightValue={heightValue}
        //colorValue={colorValue}
        //maxHeight={maxHeight}
      />
      <g transform={`translate(0,${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          setBrushExtent = {setBrushExtent}
          xValue = {xValue}
        />
      </g>
    </svg>
  );
};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

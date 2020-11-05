import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Marks } from './Marks';
import { scaleLinear, scaleOrdinal, max, hcl } from 'd3';

const heightValue = (d) => d.AllBuilding;
const maxHeight = 120;

const colorValue = (d) => d.Rank;

export const BubbleMap = ({
  data,
  filteredData,
  worldAtlas,
  //heightValue,
  //colorValue,
  //maxHeight,
}) => {
  const heightScale = useMemo(
    () =>
      scaleLinear()
        .domain([0, max(data, heightValue)])
        .range([0, maxHeight]),
    [data, heightValue, maxHeight]
  );

  const colorScale = useMemo(
    () => scaleOrdinal().domain(data.map(colorValue)),
    [data, colorValue]
  );
  const colorValues = colorScale.domain();
  colorScale.range(
    colorValues.map((value, i) => hcl((i / colorValues.length) * 360, 50, 70))
  );

  return (
    <Marks
      worldAtlas={worldAtlas}
      data={filteredData}
      heightScale={heightScale}
      heightValue={heightValue}
      colorScale={colorScale}
      colorValue={colorValue}
    />
  );
};


import { geoNaturalEarth1, geoPath, geoGraticule, format } from 'd3';
import {useMemo} from 'react';

const siFormat = format('.3~s');
export const popFormat = (number) =>
  siFormat(number).replace('G', 'B').replace('k', 'K'); /* this if the number goes very high we can use it*/ 

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const mountainWidth = 8;

export const Marks = ({
  worldAtlas: { land, interiors },
  data,
  heightScale,
  heightValue,
  colorScale,
  colorValue,
}) => (
  <g className="marks">
    { useMemo(() =>(
              <>
    <path className="sphere" d={path({ type: 'Sphere' })} />
    <path className="graticules" d={path(graticule())} />
    {land.features.map((feature) => (
      <path className="land" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
      </>
        ), [path,graticule,land,interiors])};
    
    <g class="mountains">
      {data.map((d) => {
        const [x, y] = projection([d.lng, d.lat]);
        const mountainHeight = heightScale(heightValue(d));
        const x1 = x - mountainWidth / 2;
        const x2 = x;
        const x3 = x + mountainWidth / 2;
        const y1 = y;
        const y2 = y - mountainHeight;
        const y3 = y;
        return (
          <path d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3}`} title="test" fill={colorScale(colorValue(d))}>
            <title>
              {d.city}, {d.country} {'\nTotal: '}{ (d.AllBuilding)}
            </title>
          </path>
        );
      })}
    </g>
  </g>
);

/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';

const BarCharts = () => {
  const [data] = useState([
    {
      name: 'Planing',
      uv: 4000,
    },
    {
      name: 'Requirements Analysis',
      uv: 3000,

    },
    {
      name: 'Design',
      uv: 5000,
    },
    {
      name: 'Implementation (Coding)',
      uv: 5580,
    },
    {
      name: 'Testing',
      uv: 1890,
    },
    {
      name: 'Deployment',
      uv: 2390,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (_data: any, index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div style={{ width: '100%' }}>
      <p>Click each rectangle</p>
      <ResponsiveContainer width="100%" height={100}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((_entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
    </div>
  );
};

export default BarCharts;

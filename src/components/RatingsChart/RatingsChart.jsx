import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const RatingsChart = ({ ratings }) => {
    return (
        <BarChart  className='text-xl font-semibold p-2'
            width={800}
            height={300}
            data={[...ratings]}
            layout="vertical"
            barCategoryGap="20%"
        >
            <XAxis type="number"/>
            <YAxis type="category" dataKey="name" reversed />
            <Bar dataKey="count" fill="#FF8811" />
        </BarChart>


    )
};

export default RatingsChart;
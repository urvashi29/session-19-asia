import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DisplayCharts = () => {
    const data = useSelector(state => (state.data));

    return (
        <div style={{ width: "500px", height: "500px", marginLeft: "auto", marginRight: "auto" }}>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={250} data={data} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default DisplayCharts;


{/* <div width="400px">
    <img style="width: 100%"></img>
</div> */}

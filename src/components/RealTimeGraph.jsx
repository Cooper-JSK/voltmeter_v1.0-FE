// src/components/RealTimeGraph.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect to the backend socket.io

const RealTimeGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Listen for new data from the backend
        socket.on('newData', (newData) => {
            setData((prevData) => [...prevData, newData]);
        });

        return () => {
            socket.off('newData'); // Clean up the listener on component unmount
        };
    }, []);

    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="voltage" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
};

export default RealTimeGraph;

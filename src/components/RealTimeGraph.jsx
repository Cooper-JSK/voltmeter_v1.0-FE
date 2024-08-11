import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getData } from '../utils/api';

const RealTimeGraph = ({ sessionId, isActive, sessionInterval }) => {
    const [data, setData] = useState([]);

    // Fetch and plot initial data when the component mounts
    useEffect(() => {
        const fetchInitialData = async () => {
            const initialData = await getData(sessionId);
            setData(initialData);
        };

        fetchInitialData();
    }, [sessionId]);

    // Fetch and add new data when the session is active
    useEffect(() => {
        let intervalId;

        const fetchNewData = async () => {
            const newData = await getData(sessionId);
            setData(prevData => [...prevData, ...newData]);
        };

        if (isActive) {
            intervalId = setInterval(fetchNewData, sessionInterval);
        } else if (intervalId) {
            clearInterval(intervalId);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId); // Clean up the interval on component unmount or when the session is stopped
            }
        };
    }, [isActive, sessionId, sessionInterval]);

    return (
        <LineChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="volts0" stroke="#8884d8" />
            <Line type="monotone" dataKey="volts1" stroke="#82ca9d" />
            <Line type="monotone" dataKey="volts2" stroke="#ffc658" />
            <Line type="monotone" dataKey="volts3" stroke="#ff7300" />
        </LineChart>
    );
};

export default RealTimeGraph;

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getData } from "../utils/api";
import PropTypes from "prop-types";

const RealTimeGraph = ({ sessionId, isActive, sessionInterval }) => {
  const [data, setData] = useState([]);
  const [activeDataset, setActiveDataset] = useState("adc");

  useEffect(() => {
    const fetchInitialData = async () => {
      const initialData = await getData(sessionId);
      setData(initialData);
    };

    fetchInitialData();
  }, [sessionId]);

  useEffect(() => {
    let intervalId;

    const fetchNewData = async () => {
      const newData = await getData(sessionId);
      setData((prevData) => [...prevData, ...newData]);
    };

    if (isActive) {
      intervalId = setInterval(fetchNewData, sessionInterval);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); 
      }
    };
  }, [isActive, sessionId, sessionInterval]);

  return (
    <div className="bg-blue-100 p-4 rounded-2xl  mt-12">
      {/* Buttons to toggle datasets */}
      <div className="flex justify-center mb-4">
        <button
          className={`mr-4 px-4 py-2 rounded-full ${activeDataset === "adc" ? "bg-blue-300 text-black" : "bg-white text-blue-300"}`}
          onClick={() => setActiveDataset("adc")}
        >
          ADC Data
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeDataset === "volt" ? "bg-blue-300 text-black" : "bg-white text-blue-300"}`}
          onClick={() => setActiveDataset("volt")}
        >
          Volt Data
        </button>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="createdAt"
            label={{
              value: "seconds",
              position: "insideBottomRight",
              offset: 5,
            }}
          />
          <YAxis
            label={{
              value: activeDataset === "adc" ? "steps" : "mV",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          {activeDataset === "adc" ? (
            <>
              <Line type="monotone" dataKey="adc0" stroke="#8884d8" />
              <Line type="monotone" dataKey="adc1" stroke="#82ca9d" />
              <Line type="monotone" dataKey="adc2" stroke="#000000" />
              <Line type="monotone" dataKey="adc3" stroke="#ff7300" />
            </>
          ) : (
            <>
              <Line type="monotone" dataKey="volst0" stroke="#8884d8" />
              <Line type="monotone" dataKey="volts1" stroke="#82ca9d" />
              <Line type="monotone" dataKey="volts2" stroke="#000000" />
              <Line type="monotone" dataKey="volts3" stroke="#ff7300" />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

RealTimeGraph.propTypes = {
  sessionId: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  sessionInterval: PropTypes.number.isRequired,
};

export default RealTimeGraph;

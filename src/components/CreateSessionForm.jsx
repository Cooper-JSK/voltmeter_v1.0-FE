// src/components/CreateSessionForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../utils/api";

const CreateSessionForm = () => {
  const [name, setName] = useState("");
  const [interval, setInterval] = useState(1000);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSession = await createSession({ name, interval });
    if (newSession) {
      navigate("/sessions");
    }
  };

  return (
    <>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-200 p-8 rounded-lg "
        >
          <div className="mb-6">
            <label className="block text-slate-700 text-lg font-semibold">
              Session Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 p-3 border bg-white border-slate-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter session name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 text-lg font-poppins font-semibold">
              Interval (ms)
            </label>
            <input
              type="number"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              className="mt-2 p-3 border bg-white border-slate-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter interval in milliseconds"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full font-poppins bg-blue-600 text-white py-3 px-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create Session
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateSessionForm;

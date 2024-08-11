// src/components/CreateSessionForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSession } from '../utils/api';

const CreateSessionForm = () => {
    const [name, setName] = useState('');
    const [interval, setInterval] = useState(1000);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSession = await createSession({ name, interval });
        if (newSession) {
            navigate('/sessions');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700">Session Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Interval (ms)</label>
                <input
                    type="number"
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Create Session
            </button>
        </form>
    );
};

export default CreateSessionForm;

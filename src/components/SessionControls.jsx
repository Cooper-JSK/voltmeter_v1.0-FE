// src/components/SessionControls.jsx
import React from 'react';

const SessionControls = ({ sessionId, startSession, stopSession }) => (
    <div className="mb-4">
        <button
            onClick={() => startSession(sessionId)}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mr-2"
        >
            Start Session
        </button>
        <button
            onClick={() => stopSession(sessionId)}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
            Stop Session
        </button>
    </div>
);

export default SessionControls;

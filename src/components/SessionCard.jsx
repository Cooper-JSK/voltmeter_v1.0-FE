// src/components/SessionCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SessionCard = ({ session }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">{session.name}</h2>
        <p className="text-gray-600">Interval: {session.interval} ms</p>

        <p className="text-gray-600">Status: {session.isActive ? 'Active' : 'Inactive'}</p>
        <p className="text-gray-600">Start Time: {session.startTime ? new Date(session.startTime).toLocaleString() : 'N/A'}</p>
        {session.endTime && <p className="text-gray-600">End Time: {new Date(session.endTime).toLocaleString()}</p>}

        <Link to={`/session/${session._id}`} className="text-blue-600 mt-2 inline-block">
            View Session
        </Link>
    </div>
);

export default SessionCard;

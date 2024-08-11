import React, { useState, useEffect } from 'react';
import { getSessions } from '../utils/api';
import SessionCard from '../components/SessionCard';

const SessionsList = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
            const sessionsData = await getSessions();
            setSessions(sessionsData);
        };
        fetchSessions();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Sessions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sessions.length > 0 ? (
                    sessions.map(session => (
                        <SessionCard key={session._id} session={session} />
                    ))
                ) : (
                    <p>No sessions available.</p>
                )}
            </div>
        </div>
    );
};

export default SessionsList;

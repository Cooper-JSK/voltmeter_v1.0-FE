// src/pages/Session.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSession, startSession, stopSession } from '../utils/api';
import RealTimeGraph from '../components/RealTimeGraph.jsx';
import SessionControls from '../components/SessionControls';

const Session = () => {
    const { id } = useParams();
    const [session, setSession] = useState(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const fetchSession = async () => {
            const sessionData = await getSession(id);
            setSession(sessionData);
            setIsActive(sessionData.isActive);
        };
        fetchSession();
    }, [id]);

    const handleStart = async () => {
        await startSession(id);
        setIsActive(true);
    };

    const handleStop = async () => {
        await stopSession(id);
        setIsActive(false);
    };

    if (!session) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{session.name}</h1>
            <SessionControls sessionId={id} startSession={handleStart} stopSession={handleStop} />
            <RealTimeGraph sessionId={id} isActive={isActive} />
        </div>
    );
};

export default Session;

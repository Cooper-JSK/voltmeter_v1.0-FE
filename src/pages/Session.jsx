// src/pages/Session.jsx
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSession, startSession, stopSession, downloadSessionData } from '../utils/api';
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

    const handleDownload = async () => {
        await downloadSessionData(id);
    };

    if (!session) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{session.name}</h1>
            <SessionControls sessionId={id} startSession={handleStart} stopSession={handleStop} />

            {/* Wrapper for the graph with full width */}
            <div className="w-full mt-6">
                <RealTimeGraph sessionId={id} isActive={isActive} sessionInterval={session.interval} />
            </div>

            {/* Centering the button */}
            <div className="mt-4 flex justify-center">
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Download Excel
                </button>
            </div>
        </div>
    );
};

export default Session;

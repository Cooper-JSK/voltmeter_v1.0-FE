// src/pages/Session.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSession, startSession, stopSession, downloadSessionData } from '../utils/api';
import RealTimeGraph from '../components/RealTimeGraph.jsx';
import SessionControls from '../components/SessionControls';
import { SiMicrosoftexcel } from "react-icons/si";

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
        const fileName = `${session.name.replace(/\s+/g, '_')}_${id}.xlsx`;
            await downloadSessionData(id, fileName);
    };

    if (!session) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">{session.name}</h1>
            <div className="flex justify-between items-center mb-4">
                <SessionControls sessionId={id} startSession={handleStart} stopSession={handleStop} />
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 hover:bg-white hover:text-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center gap-2">
                    Download <SiMicrosoftexcel />
                </button>
            </div>
            <div className="container w-full mt-6">
                <RealTimeGraph sessionId={id} isActive={isActive} sessionInterval={session.interval} />
            </div>
        </div>
    );
};

export default Session;

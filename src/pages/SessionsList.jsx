import { useState, useEffect } from "react";
import { getSessions } from "../utils/api";
import SessionCard from "../components/SessionCard";

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
      <h1 className="text-4xl font-poppins text-blue-600 text-center font-bold mb-6">
        Sessions
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <div key={session._id} className="w-full sm:w-1/2 lg:w-1/3">
              <SessionCard session={session} />
            </div>
          ))
        ) : (
          <p className="text-center w-full">No sessions available.</p>
        )}
      </div>
    </div>
  );
};

export default SessionsList;

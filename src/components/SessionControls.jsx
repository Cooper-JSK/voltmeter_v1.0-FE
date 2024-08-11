import PropTypes from "prop-types";

const SessionControls = ({ sessionId, startSession, stopSession }) => (
  <div className="flex gap-6">
    <button
      onClick={() => startSession(sessionId)}
      className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-white hover:text-green-600 mr-2"
    >
      Start Session
    </button>
    <button
      onClick={() => stopSession(sessionId)}
      className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-white hover:text-red-600"
    >
      Stop Session
    </button>
  </div>
);

SessionControls.propTypes = {
  sessionId: PropTypes.string.isRequired,
  startSession: PropTypes.func.isRequired,
  stopSession: PropTypes.func.isRequired,
};

export default SessionControls;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SessionCard = ({ session }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-gray-800 mb-3">{session.name}</h2>
    <p className="text-gray-600 mb-2">
      Interval: <span className="font-medium">{session.interval} ms</span>
    </p>
    <p
      className={`mb-2 ${session.isActive ? "text-green-600" : "text-red-600"}`}
    >
      Status: {session.isActive ? "Active" : "Inactive"}
    </p>
    <p className="text-gray-600 mb-2">
      Start Time:{" "}
      {session.startTime ? new Date(session.startTime).toLocaleString() : "N/A"}
    </p>
    {session.endTime && (
      <p className="text-gray-600 mb-4">
        End Time: {new Date(session.endTime).toLocaleString()}
      </p>
    )}
    <Link
      to={`/session/${session._id}`}
      className="text-blue-600 hover:underline font-medium"
    >
      View Session
    </Link>
  </div>
);

SessionCard.propTypes = {
  session: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
  }).isRequired,
};

export default SessionCard;

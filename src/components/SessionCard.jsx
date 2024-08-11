import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SessionCard = ({ session }) => (
  <div className="bg-blue-100  rounded-xl font-poppins shadow-lg p-8 mt-6">
    <h2 className="text-xl font-semibold text-slate-800 mb-8">{session.name}</h2>
    <p className="text-slate-600 mb-2">
      Interval: <span className="font-medium">{session.interval} ms</span>
    </p>
    <p
      className="mb-2 text-slate-600 "
    >
      Status: {session.isActive ? "Active" : "Inactive"}
    </p>
    <p className="text-slate-600 mb-2">
      Start Time:{" "}
      {session.startTime ? new Date(session.startTime).toLocaleString() : "N/A"}
    </p>
    {session.endTime && (
      <p className="text-slate-600 mb-4">
        End Time: {new Date(session.endTime).toLocaleString()}
      </p>
    )}
    <Link
      to={`/session/${session._id}`}
      className="text-blue-600 hover:underline font-bold"
    >
        <button className="bg-blue-300 text-black py-2 px-4 rounded-full hover:bg-white hover:text-blue-600 "> View Session</button>
     
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

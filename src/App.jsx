
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSession from './pages/CreateSession';
import Session from './pages/Session';
import SessionsList from './pages/SessionsList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/create-session" element={<CreateSession />} />
          <Route path="/session/:id" element={<Session />} />
          <Route path="/sessions" element={<SessionsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

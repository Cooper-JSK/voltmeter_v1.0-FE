// src/pages/Home.jsx
import React from 'react';
import CreateSessionForm from '../components/CreateSessionForm';

const Home = () => (
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create a New Session</h1>
        <CreateSessionForm />
    </div>
);

export default Home;

// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const createSession = async (sessionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/session`, sessionData);
        return response.data;
    } catch (error) {
        console.error('Error creating session', error);
        return null;
    }
};

export const getSession = async (sessionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/session/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching session', error);
        return null;
    }
};

export const startSession = async (sessionId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/session/${sessionId}/start`);
        return response.data;
    } catch (error) {
        console.error('Error starting session', error);
        return null;
    }
};

export const stopSession = async (sessionId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/session/${sessionId}/stop`);
        return response.data;
    } catch (error) {
        console.error('Error stopping session', error);
        return null;
    }
};

export const getSessions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/session`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sessions', error);
        return [];
    }
};

// src/utils/api.js
export const getData = async (sessionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        return [];
    }
};

export const downloadSessionData = async (sessionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/session/${sessionId}/download`, {
            responseType: 'blob', // Important to handle binary data
        });

        // Create a URL for the file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `session_${sessionId}.xlsx`); // Set the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading session data', error);
    }
};
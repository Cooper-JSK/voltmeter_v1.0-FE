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

export const getData = async (sessionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        return [];
    }
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

const setAuthToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = '';
};

const handleError = (error) => {
    const message = error?.response?.data?.message || error.message || 'An error occurred. Please try again.';
    Notify.failure(message);
    return message;
};

export const login = createAsyncThunk('login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/login', credentials);
        setAuthToken(response.data.token); // Set token after successful login
        return response.data;
    } catch (error) {
        const errorMessage = handleError(error);
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const register = createAsyncThunk('register', async (userData, thunkAPI) => {
    try {
        await axios.post('/register', userData);
        const response = await axios.post('/login', userData);
        setAuthToken(response.data.token); // Set token after successful registration
        return response.data;
    } catch (error) {
        const errorMessage = handleError(error);
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const getCurrentUser = createAsyncThunk('user/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
        return thunkAPI.rejectWithValue('Unable to download user information');
    }

    try {
        setAuthToken(persistedToken);  // Set token in headers for authentication
        const response = await axios.get('/users/current');
        return response.data;
    } catch (error) {
        if (error.response?.data?.message === 'jwt expired') {
            clearAuthToken(); // Clear token if expired
            thunkAPI.dispatch({ type: 'persist/PURGE', key: 'persist:auth' }); // Clear persisted auth
        }
        const errorMessage = handleError(error);
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/logout');
        clearAuthToken(); // Clear token after logout
        return null;
    } catch (error) {
        const errorMessage = handleError(error);
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

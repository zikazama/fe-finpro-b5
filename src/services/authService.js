import api from '../lib/api';

const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', {
      username,
      password
    });
    
    // If login is successful, save the response data to localStorage
    if (response.data) {
      // Store user data and token if provided by the backend
      localStorage.setItem('user', JSON.stringify(response.data));
      // If the API returns a token, store it separately
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    }
    
    return response.data;
  } catch (error) {
    // Handle specific error cases
    if (error.response) {
      // Server responded with error status
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error: Unable to connect to server');
    } else {
      // Something else happened
      throw new Error('An unexpected error occurred');
    }
  }
};

const logout = () => {
  // Remove user data and token from localStorage
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export { login, logout, getCurrentUser };
import axios from 'api/core';

export const checkConnect = () => 
        axios.get('http://localhost:3004');

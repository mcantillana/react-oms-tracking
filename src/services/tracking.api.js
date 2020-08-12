import axios from 'axios';

export const config = {
    apiUrl: process.env.REACT_APP_BASE_API_URL
}

export const getTracking = async (data) => {
    
    return await axios.post(config.apiUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...data
    })
}

import axios from 'axios';

export const config = {
    apiUrl: process.env.REACT_APP_BASE_API_URL
}

// eyJvcmRlcl9pZCI6IDEyMzQsICJlbWFpbCI6ICJtY2FudGlsbGFuYUBwb3J0YWw1My5jbCIgfQ

export const getTracking = async (data) => {
    
    // const url = `https://oms-qa.d2.e2l.dev/sales/order/track`;
    
    return await axios.post(config.apiUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...data
    })
}

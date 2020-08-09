import axios from 'axios';

// export const config = {
//     apiUrl: process.env.REACT_APP_BASE_API_URL
// }
// eyJvcmRlcl9pZCI6IDEyMzQsICJlbWFpbCI6ICJtY2FudGlsbGFuYUBwb3J0YWw1My5jbCIgfQ

export const getTracking = async (data) => {
    
    const url = `http://127.0.0.1:8000/tracking`;

    return await axios.post(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        order_id: 1234,
        email: "mcantillana@linets.cl"
    })
}

import { FETCH_DATA, FETCH_DATA_STATUS,RECEIVE,REQUEST,FAILURE } from '../actionsTypes';
import axios from "axios";
import { RSAA } from 'redux-api-middleware';

const apiUrl = "https://jsonplaceholder.typicode.com/users"

export const fetch_data = (data) => {
    return {
        type: FETCH_DATA,
        payload: data
    }
};
export const fetched_data = () => {
    return {
        type: FETCH_DATA_STATUS,
        payload: false
    }
}
export const fetching_data = () => {
    return {
        type: FETCH_DATA_STATUS,
        payload: true
    }
}
export const fetch_robot = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetching_data())
            await axios.get(
                `${apiUrl}`
            ).then((response) => {
                console.log(response)
                dispatch(fetch_data(response.data))
            })
                .then(() => (dispatch(fetched_data())));
        } catch (error) {
            throw (error)
        }
    }
}



export function fetch_data_from_rsaa() {
    return {
        [RSAA]: {
            endpoint: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            types: [REQUEST, RECEIVE, FAILURE]   
        }
    }
}


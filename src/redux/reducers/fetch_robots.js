import { FETCH_DATA, FETCH_DATA_STATUS } from "../actionsTypes";

const initialState = {
    robots: [],
    fetch_robot_status: false,
};

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                robots: action.payload
            };
        }
        case FETCH_DATA_STATUS: {
            return {
                ...state,
                fetch_robot_status: action.payload
            };
        }
        default:
            return state;
    }
}

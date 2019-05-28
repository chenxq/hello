// import { CHANGE_COLOR } from '../actions/changeAction';
import { GET_USER } from '../actions/getUser';
import axios from 'axios';
// import { combineReducers } from 'redux';
axios.defaults.responseType='json'; 
axios.defaults.headers = {'Content-Type': 'json'};

const initialState = {
    // color: 'red',
    message: 'Hello'
};

export default function getUser(state = initialState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        // case CHANGE_COLOR:
        //     return {
        //         color: state.color === 'red' ? 'yellow' : 'red'
        //     };
        case GET_USER:
            return {
                message: state.message
            }
        default:
            return state;
    }
}

// export default combineReducers({
//     color: changeColor,
// })
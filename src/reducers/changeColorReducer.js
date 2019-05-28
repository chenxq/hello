// import { CHANGE_COLOR } from '../actions/changeAction';
import { GET_USER } from '../actions/getUser';
import axios from 'axios';
// import { combineReducers } from 'redux';

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
            return (dispatch) => {
                axios.get('https://reading-club-backend.herokuapp.com/users')
                .then(res => {
                    // alert('ok');
                    const data = res.data;
                    alert(data);
                    dispatch(action);
                }).catch(error=>{})
            };
        default:
            return state;
    }
}

// export default combineReducers({
//     color: changeColor,
// })
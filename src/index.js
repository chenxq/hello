import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import Square from './Square';
import { Provider } from 'react-redux';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_YELLOW = 'CHANGE_YELLOW';
export const CHANGE_BLUE = 'CHANGE_BLUE';
export const CHANGE_GREEN = 'CHANGE_GREEN';

// export function changeColor(color) {
//     return {
//         type: CHANGE_COLOR,
//         payload: { color }
//     }
// }

const initialState = {
    color: 'red'
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        case CHANGE_COLOR:
            return {
                color: state.color === 'blue' ? 'red' : 'blue'
            };
        case CHANGE_YELLOW:
            return {
                color: 'yellow'
            };
        case CHANGE_BLUE:
            return {
                color: 'blue'
            };
        case CHANGE_GREEN:
            return {
                color: 'green'
            };
        default:
            return state;
    }
}

function renderSquare(i) {
    return <Square value={i}/>;
  }

const store = createStore(reducer);

const array = [1, 2, 3];
const App = () => (
    <Provider store={store}>
        {array.map((item) => renderSquare(item))};
    </Provider>
);

render(<App />, document.getElementById('root'));
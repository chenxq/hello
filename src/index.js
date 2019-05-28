import React from 'react';
import { render } from 'react-dom';
import Square from './Square';
import { Provider } from 'react-redux';
import store from './store';

function renderSquare(i) {
    return <Square key={i} value={i}/>
  }

const array = [1, 2, 3];
const App = () => (
    <Provider store={store}>
        {array.map((item) => renderSquare(item))}
    </Provider>
);

render(<App />, document.getElementById('root'));
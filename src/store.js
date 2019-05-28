import { createStore, applyMiddleware } from 'redux';
import getUser from './reducers/changeColorReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const composeEnhancers = compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
// )
const store = createStore(getUser, applyMiddleware(thunk));

export default store;
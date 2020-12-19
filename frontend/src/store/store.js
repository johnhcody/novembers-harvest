import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => (
//     createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunk, logger)
//     )
// );

// export default configureStore; 

import React from 'react'

export const Store = React.createContext();

function reducer() { }

export function StoreProvider(props) { 
    return <Store.Provider value='data from store'>{props.children}</Store.Provider>
}
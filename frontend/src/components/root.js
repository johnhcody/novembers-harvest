import React from 'react';
//import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// We'll create this soon
import App from './app';

const Root = ({ store }) => (
    <Provider>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

const UserContext = React.createContext();

function Provider({children}) {
    const value = {
        userName: '',
        email: '',
        password: ''
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default Root;
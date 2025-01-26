import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/store';
import { Provider } from 'react-redux';

interface ProvidersProps {
    children: ReactNode;
};
  
const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
};

export default Providers;
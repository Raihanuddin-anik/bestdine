import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

const AppRouter:React.FC = ({children}) => {
    return (
        <Router>
            {children}
            <Routes>
         
             <Route  path="/" element={<Home/>} />
           
             
            </Routes>
        </Router>
    );
};

export default AppRouter;
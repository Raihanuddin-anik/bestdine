import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meals from './components/Home/Meals';

const AppRouter:React.FC = ({children}) => {
    return (
        <Router>
            {children}
            <Routes>
            <Route  path="/" element={<Meals/>} />
             
            </Routes>
        </Router>
    );
};

export default AppRouter;
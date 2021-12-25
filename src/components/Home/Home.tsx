import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner';
import Meals from './Meals';

const Home = () => {
    return (
        <Container>
            <Banner/>
            <Meals/>
        </Container>
    );
};

export default Home;
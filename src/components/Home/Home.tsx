import React from 'react';
import { Container } from 'react-bootstrap';
import customHook from '../../hooks/customHook';
import MealService from '../../Services/MealService';
// import { IProduct } from '../../types';
import Banner from './Banner';
import Meals from './Meals';

const Home = () => {
 const {data, isLoading} = customHook(MealService.getAllMeal) 
   console.log(data)
    return (
        <Container>
            <Banner/>
            <Meals isLoading={isLoading} data={data}/>
        </Container>
    );
};

export default Home;
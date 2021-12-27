import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MealService from '../../Services/MealService';
import { IProduct } from '../../types';
import Banner from './Banner';
import Meals from './Meals';

const Home = () => {
    const [meal, setMeal] = useState<IProduct[]> ([] as IProduct[]);
    console.log(meal)
    useEffect(()=>{
        MealService.getAllMeal()
        .then(res => setMeal(res))
    })
    return (
        <Container>
            <Banner/>
            <Meals/>
        </Container>
    );
};

export default Home;
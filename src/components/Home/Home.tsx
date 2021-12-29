import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import MealService from '../../Services/MealService';
// import { IProduct } from '../../types';
import Banner from './Banner';
import Meals from './Meals';

const Home = () => {

   
    useEffect(()=>{
      MealService.getAllMeal()
      .then(res=>console.log(res))
    })
   
    return (
        <Container>
            <Banner/>
            <Meals/>
        </Container>
    );
};

export default Home;
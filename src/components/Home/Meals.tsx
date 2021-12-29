import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IProduct } from '../../types';
import Meal from '../Common/Meal';

interface IProps {
    data: any;
    isLoading: boolean;
}

const Meals = ({ data, isLoading }: IProps) => {

console.log(data)
    return (
        <div> 
        <Container>
            <Row>
               
                    {
                        data?.map((meal: IProduct) => (
                            <Meal key={meal.idCategory}
                                meal={meal} />
                        ))
                    }
            
            </Row>
        </Container>
        </div>
    );
};

export default Meals;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IProduct } from '../../types';
interface IProps {
    meal: IProduct;

}
const Meal = ({ meal }: IProps) => {
    return (
        <Col md={3}>
            <div style={{ margin: "10px" }}>
                <Card.Img variant="top" src={meal.strCategoryThumb} />

            </div>
            <p style={{ color: "white", textAlign: "center" }}>{meal.strCategory}</p>
        </Col>
    );
};

export default Meal;
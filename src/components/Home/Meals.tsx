import React, { useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';


const Meals = () => {
  
//  const [melas, setMeas] = useState([]);
//  console.log(melas)

 useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(json => console.log(json))
 },[ ])
    return (
       
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
     
    );
};

export default Meals;
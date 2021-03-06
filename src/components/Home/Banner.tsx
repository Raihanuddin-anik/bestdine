import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import sideLogo from '../../assest/meal-icon.png';
import patreon from '../../assest/patreon_logo.png';
const Banner = () => {
    return (
 
            <Container style={{paddingTop:"40px"}} >
                <Row>
                    <Col className="text-white text-center" lg={2}>
                        <img   src={sideLogo} />
                    </Col>
                    <Col className="text-white text-center ps-5" lg={8}>
                       <h1 className="text-white">Welcome to TheMealDB</h1>
                     <p> Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                 We also offer a free JSON API for anyone wanting to use it.<br/>
                 If you like the site, please consider supporting us on Patreon by clicking the link below./..</p>
                
                  <img className="w-25"  src={patreon} />
                   <p>Click to Support: Currently 650 supporters</p>
                    </Col>
                    <Col className="text-white text-center" lg={2}>
                        <img   src={sideLogo} />
                    </Col>
                </Row>
            </Container>
       
        
    );
};

export default Banner;
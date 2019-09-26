import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';
import ImageOne from '../images/recipe.PNG'
import ImageTwo from '../images/furniture.PNG'

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <p> React from here</p>
            </div>
            <div className="cards">
                <div className="card-center">
                    <Card>
                        <Card.Img variant="top" src={ImageOne} style={{height: '400px'}} />
                        <Card.Body>
                            <Card.Title>Search Recipe</Card.Title>
                            <Card.Text>
                                use edaman API to get different kinds of recipe for dishes.
                                ease to search just input cooking material, you will get a lot of recipes.
                    </Card.Text>
                            <Link to="/recipe">
                                <Button variant="primary">Try Now</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ImageTwo} style={{height: '400px'}} />
                        <Card.Body>
                            <Card.Title>Furniture Shop</Card.Title>
                            <Card.Text>
                                An E-commerce website, you could view all furnitures and add them to shopping cart.
                                 In cart, you could add more amount, or delete selected products.
                    </Card.Text>
                            <Link to="/furniture">
                                <Button variant="primary">Try Now</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Fragment } from 'react/cjs/react.development';

const Product = (props) => {
    
    return (
        <Fragment>
        <div className='productName fluid'>
            <Container>
                <Row>
                <Col lg={6} md={6} sm={12}>
                    <img src='https://images-na.ssl-images-amazon.com/images/I/518PvURfFsL._AC_US218_.jpg' alt='img' />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, id laborum harum fuga architecto in!</p>   
                    <p>Price: $ 300</p>
                </Col>
                </Row>
                
            </Container>
            <div>
             
            </div>
            <div className='product-details'>
                
            </div>
        </div>
        </Fragment>
    );
};

export default Product;
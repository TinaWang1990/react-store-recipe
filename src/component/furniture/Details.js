import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import { ProductConsumer } from '../../context'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, price, image, brand, material, info, inCart } = value.detail
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 justify-content-center">
                                    <img src={image} className="img-fluid" alt="" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Brand: {brand}</h2>
                                    <h4 className="mt-3 mb-2 text-muted">made by: {material}</h4>
                                    <h4><strong>price: <span>$</span>{price} </strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        description:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <p className="row mx-auto">
                                    <ButtonContainer className="btnone">
                                        <Link to="/furniture">back to products</Link>
                                    </ButtonContainer>
                                    <ButtonContainer cart className="btntwo" 
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                    disabled={inCart ? true : false}>
                                        {inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details

import React, { Component } from 'react'
import { ProductWrapper } from './Button'
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import { IoIosCart } from "react-icons/io";
import PropTypes from 'prop-types'

class Product extends Component {

    render() {
        const { id, title, price, image, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 col-md-6 col-lg-4 my-3 proWrapper">

                <div className="card ">
                    <ProductConsumer>
                        {(value)=>(
                            <div className="img-container m-3" 
                            onClick={() => value.handleDetail(id)}>
                            <Link to="/furniture/details">
                                <img src={image} alt="product" className="card-img-top" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false}
                                onClick={() => { value.addToCart(id); value.openModal(id); }}
                            >
                                {
                                    inCart ?
                                        (<p className="text-capitalize mb-0" disabled>in cart</p>) :
                                        (<IoIosCart />)
                                }
                            </button>
                        </div>
                        )}
                        

                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-dark font-italic mb-0">
                            <span className="mr-1">${price}</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
export default Product

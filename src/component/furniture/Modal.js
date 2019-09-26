import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import { ButtonContainer, ModalContainer } from './Button'
import { Link } from 'react-router-dom'

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { image, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return <ModalContainer>
                            <div className="container ">
                                <div className="row">
                                    <div
                                        id="modal"
                                        className="col-8 mx-auto col-md-6 col-lg-4 py-5 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <img src={image} className="img-fluid mb-3" alt="prod" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: $ {price}</h5>
                                        <p className="row mx-auto justify-content-center">
                                            <ButtonContainer className="btnone"
                                                onClick={() => closeModal()}>
                                                <Link to="/furniture">continue shopping</Link>
                                            </ButtonContainer>
                                            <ButtonContainer className="btnone"
                                                onClick={() => closeModal()}>
                                                <Link to="/furniture/cart">go to cart</Link>
                                            </ButtonContainer>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    }

                }}
            </ProductConsumer>
        )
    }
}

export default Modal

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoIosBed } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import {ButtonContainer, NavWrapper} from './Button';


export class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/furniture" className="logo">
                    <IoIosBed />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="navitem ml-5">
                        <Link to="/furniture" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/furniture/cart" className="cart ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <IoIosCart />
                        </span>                        
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


export default Navbar
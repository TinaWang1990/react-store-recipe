import React from 'react'
import Navbar from '../component/furniture/Navbar'
import { Route, Switch } from 'react-router-dom'
import Products from '../component/furniture/Products'
import Details from '../component/furniture/Details'
import Cart from '../component/furniture/Cart'
import { ProductProvider } from "../context"
import Modal from '../component/furniture/Modal'

function Furnitur() {
    return (
        <ProductProvider>
            <React.Fragment>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/furniture/" component={Products} />
                    <Route exact path="/furniture/details/" component={Details} />
                    <Route exact path="/furniture/cart/" component={Cart} />                    
                </Switch>
                <Modal />
            </React.Fragment>
        </ProductProvider>
    )
}

export default Furnitur

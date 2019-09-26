import React, { Component } from 'react'
import { storeProducts, detailProducts } from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        detail: detailProducts,
        cart: [],
        modalOpen: false,
        modalProduct: detailProducts,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.getProd();
    }
    getProd = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        console.log(tempProducts)
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detail: product }
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const count = product.count;
        const price = product.price;
        product.total = price * count;
        this.setState(
            () => {
                return { products: tempProducts, cart: [...this.state.cart, product] }
            },
            () => {
                this.addTotal();
            }
        )
        this.addTotal()
    }
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectProd = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectProd);
        const prod = tempCart[index];
        prod.count = prod.count +1;
        prod.total = prod.count*prod.price;

        this.setState(()=>{return {cart: [...tempCart]}},()=>{this.addTotal()})
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectProd = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectProd);
        const prod = tempCart[index];
        console.log(prod.count)
        if(prod.count <= 1){
            this.removeItem(id);
        }else{
            prod.count = prod.count - 1;
            prod.total = prod.count*prod.price;
            this.setState(()=>{return {cart: [...tempCart]}},()=>{this.addTotal()})
        }        
        
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id))
        let removedProd = tempProducts[index];
        removedProd.inCart = false;
        removedProd.count = 0;
        removedProd.total = 0;
        this.addTotal();
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        })
    }
    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        },
            () => {
                this.getProd();
                this.addTotal();
            }
        )
    }
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.forEach(item => (subTotal += item.total))
        const temptax = subTotal * 0.13;
        const tax = parseFloat(temptax.toFixed(2));
        subTotal = parseFloat(subTotal.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value=
                {{
                    ...this.state,
                    addToCart: this.addToCart,
                    handleDetail: this.handleDetail,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }

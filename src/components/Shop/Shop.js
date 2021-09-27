import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const matchedProduct = products.find(product => product.key === key);
                const quantity = savedCart[key];
                matchedProduct.quantity = quantity;
                storedCart.push(matchedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const handleSearch = e => {
        console.log(e.target.value);
        const searchText = e.target.value;
        const displayProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(displayProduct)
    }

    const _quantity = (cart, product) => {
        for (const item of cart) {
            if (item.key === product.key) {
                item.quantity = item.quantity + 1 || 2;
                break;
            }
        }
        return cart;
    }

    const handleAddToCart = (product) => {
        let newCart = [];
        if (cart.indexOf(product) !== -1) {
            const getCart = _quantity([...cart], product);
            newCart = [...getCart];
        } else {
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key);
    }
    return (
        <>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text" placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {displayProducts.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}></Product>)}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;
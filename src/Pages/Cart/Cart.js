import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";

const Cart = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('user.json')
        .then(res => res.json())
        .then(data => setCart(data[0].cart))
    },[cart])

    const myCart = products.filter(product => cart.indexOf(product.id) !== -1)

    return (
        <div>
            <h1>Cart: {myCart.length}</h1>
            <p>no products added</p>
        </div>
    );
};

export default Cart;
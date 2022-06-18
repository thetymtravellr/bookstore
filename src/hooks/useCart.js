import { useEffect, useState } from "react";

const useCart = () => {

    const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("user.json")
        .then((res) => res.json())
        .then((data) => setCart(data[0].cart));
    }, [cart]);

    return [cart,setCart];
};

export default useCart;
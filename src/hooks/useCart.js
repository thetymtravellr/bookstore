import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useCart = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: cart,
    refetch,
  } = useQuery("cart", async () => {
    const res = await fetch(`https://arcane-taiga-01155.herokuapp.com/cart?email=${user?.email}`);
    return res.json();
  });

  return {cart,isLoading,error, refetch};
};

export default useCart;

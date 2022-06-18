import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import useCart from "../../hooks/useCart";

const Cart = () => {
  const {cart,isLoading,error} = useCart()
  
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div>
      <div className="w-full border flex justify-between px-6 py-4 text-3xl font-semibold">
        <h1>Cart</h1>
        <p>
          {cart.length} {cart.length > 1 ? "items" : "item"}
        </p>
      </div>
      <div className="my-6 px-6">
        <table class="table-auto text-left w-full max-w-7xl mx-auto">
          <thead className="">
            <tr className="text-gray-400 h-12">
              <th className="font-normal">Product Detail</th>
              <th className="font-normal">Quantity</th>
              <th className="font-normal">Price</th>
              <th className="font-normal">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr className="">
                <td className="w-2/5">
                  <div className="flex space-x-2 items-center">
                    <img className="w-16" src={item.image} alt="" />
                    <div>
                      <h1 className="text-xl">{item.title}</h1>
                    </div>
                  </div>
                </td>
                <td>
                 <div className="flex items-center">
                 <button>
                    <PlusCircleIcon className="w-6" />
                  </button>
                  <p className="text-xl">1</p>
                  <button>
                    <MinusCircleIcon className="w-6" />
                  </button>
                 </div>
                </td>
                <td>
                  <p>{item.price}</p>
                </td>
                <td>
                  <p>{parseInt(item.price) * 1}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

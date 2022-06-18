import HeartIconOutline from "@heroicons/react/outline/HeartIcon";
import HeartIconSolid from "@heroicons/react/solid/HeartIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useCart from "../hooks/useCart";
import useDB from "../hooks/useDB";

const ProductCard = ({ book, refetchBook }) => {
  const { _id, category, details, rating, image, title, price, wishlisted } =
    book;

  const [user] = useAuthState(auth);
  const { cart, isLoading, error, refetch } = useCart();
  const { addToList, removeFromList } = useDB(_id);

  if (isLoading) {
    return <p>loading</p>;
  }
  const listed = wishlisted.find((e) => e === user?.email);
  const added = cart.find((e) => e.title === title);

  const addToCart = () => {
    const item = {
      category,
      details,
      rating,
      image,
      title,
      price,
      customer: user.email,
    };

    fetch(`https://arcane-taiga-01155.herokuapp.com/cart`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };

  // const addToList = (id) => {
  //   const email = user.email;
  //   fetch(`http://localhost:8080/books/wishlisted/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         refetchBook();
  //       }
  //     });
  // };

  // const removeFromList = (id) =>{
  //   const email = user.email;
  //   fetch(`http://localhost:8080/books/removeFromList/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         refetchBook();
  //       }
  //     });
  // }

  return (
    <div className="h-56 border flex w-full max-w-xs rounded-md mx-auto md:mx-0 relative">
      <img
        alt="books"
        src={image}
        className="h-full w-1/2 object-cover rounded-md"
      />
      <div className="flex flex-col font-medium p-3">
        <h5 className="text-lg font-semibold text-gray-700">{title}</h5>
        <p className="text-gray-400">
          <small>{category}</small>
        </p>
        <p>{rating}</p>
        <p className="text-green-500">${price.toFixed(2)}</p>
        <div className="flex items-center space-x-2 mt-4 absolute bottom-4">
          <button
            onClick={addToCart}
            disabled={added}
            className="btn text-white px-3 py-2 rounded-xl"
          >
            {added ? "added" : "Add to cart"}
          </button>
          {listed ? (
            <button className="text-red-500" onClick={removeFromList}>
              <HeartIconSolid className="w-6" />
            </button>
          ) : (
            <button className="text-red-500" onClick={addToList}>
              <HeartIconOutline className="w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

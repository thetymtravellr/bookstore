import HeartIconOutline from "@heroicons/react/outline/HeartIcon";
import HeartIconSolid from "@heroicons/react/solid/HeartIcon";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { category, details, rating, image, title, price } = product;
  const [liked, setLiked] = useState(false);
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
          <button className="bg-black text-white px-3 py-2 rounded-xl">
            Add to cart
          </button>
          <button className="text-red-500" onClick={() => setLiked(!liked)}>
            {liked ? (
              <HeartIconSolid className="w-6" />
            ) : (
              <HeartIconOutline className="w-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

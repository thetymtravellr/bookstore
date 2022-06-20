import { Link } from "react-router-dom";
import useDB from "../hooks/useDB";

const WishlistCard = ({ item }) => {
    const { addToList, removeFromList } = useDB(item._id);
  return (
    <div className="w-60 border py-2 px-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img className="w-16" src={item.image} alt="" />
        </Link>
        <div>
          <button onClick={removeFromList} className="btn btn-error text-white hover:bg-red-500">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;

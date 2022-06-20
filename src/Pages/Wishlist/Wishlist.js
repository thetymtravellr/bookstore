import { useAuthState } from "react-firebase-hooks/auth";
import WishlistCard from "../../Components/WishlistCard";
import auth from "../../firebase.init";
import useBooks from "../../hooks/useBooks";

const Wishlist = () => {
  const [user] = useAuthState(auth);
  const { books, isLoading, error } = useBooks();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  const listed = books.filter((book) => book.wishlisted.includes(user?.email));
  return (
    <div>
      <div className="w-full flex justify-between px-6 py-4 text-3xl font-semibold">
        <h1>Wishlist</h1>
        <p>
          {listed.length} {listed.length > 1 ? "items" : "item"}
        </p>
      </div>
      <div className="my-6 px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-4">
        {listed.map((item) => (
          <WishlistCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

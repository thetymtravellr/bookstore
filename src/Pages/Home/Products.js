import { useState } from "react";
import ProductCard from '../../Components/ProductCard';
import useBooks from "../../hooks/useBooks";

const Products = () => {
  const [active, setActive] = useState("forYou");
  const [books,isLoading,error,refetch] = useBooks();

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div>
      <div className="flex space-x-12">
        <button
          onClick={() => setActive("forYou")}
          className={`text-3xl font-semibold ${
            active === "forYou" ? "text-black" : "text-gray-400"
          }`}
        >
          For You
        </button>
        <button
          onClick={() => setActive("newRelease")}
          className={`text-3xl font-semibold ${
            active === "newRelease" ? "text-black" : "text-gray-400"
          }`}
        >
          New Release
        </button>
        <button
          onClick={() => setActive("bestSeller")}
          className={`text-3xl font-semibold ${
            active === "bestSeller" ? "text-black" : "text-gray-400"
          }`}
        >
          Best Seller
        </button>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 my-12">
        {books.map((book) => (
          <ProductCard key={book.id} book={book} refetchBook={refetch}/>
        ))}
      </div>
    </div>
  );
};

export default Products;

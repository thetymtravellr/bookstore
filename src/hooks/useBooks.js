import { useQuery } from "react-query";

const useBooks = () => {
  const {
    isLoading,
    error,
    data: books,
    refetch,
  } = useQuery("allBooks", async () => {
    const res = await fetch("https://arcane-taiga-01155.herokuapp.com/books");
    return res.json();
  });

  return {books,isLoading,error, refetch}
};

export default useBooks;

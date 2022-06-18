import { useQuery } from "react-query";

const useBooks = () => {
  const {
    isLoading,
    error,
    data: books,
    refetch,
  } = useQuery("allBooks", async () => {
    const res = await fetch("http://localhost:8080/books");
    return res.json();
  });


  return [books,isLoading,error, refetch]
};

export default useBooks;

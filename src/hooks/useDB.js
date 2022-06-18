import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useBooks from "./useBooks";

const useDB = (id) => {

  const [user] = useAuthState(auth);
  const {refetch} = useBooks();

  const addToList = () => {
    const email = user.email;
    fetch(`https://arcane-taiga-01155.herokuapp.com/books/wishlisted/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };

  const removeFromList = () => {
    const email = user.email;
    fetch(`https://arcane-taiga-01155.herokuapp.com/books/removeFromList/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };
  return { addToList, removeFromList };
};

export default useDB;

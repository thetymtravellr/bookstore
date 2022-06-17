import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log(email, password);
  };

  if (user || emailUser) {
    console.log(user);
    navigate("/");
  }
  if (loading || emailLoading || updating) {
    console.log("loading");
  }
  if (error || emailError || updateError) {
    console.log("error");
  }
  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full">
        <form
          className="flex flex-col space-y-2 w-full max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border rounded p-1 text-xl max-w-xs mx-auto"
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <input
            className="border rounded p-1 text-xl max-w-xs mx-auto"
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <input
            className="border rounded p-1 text-xl max-w-xs mx-auto"
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <input
            className="border w-fit mx-auto bg-black py-2 px-4 rounded text-white uppercase cursor-pointer active:scale-95"
            type="submit"
            value="register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

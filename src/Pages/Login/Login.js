import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    emailUser,
    emailLoading,
    emailError,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signInWithEmailAndPassword(email,password)
    console.log(email,password);
  };

  if(user || emailUser){
    console.log(user);
    navigate('/')
  }
  if(loading || emailLoading){
    console.log('loading');
  }
  if(error || emailError){
    console.log('error');
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
            type='email'
            placeholder="email"
            {...register("email", { required: true })}
          />
          <input
            className="border rounded p-1 text-xl max-w-xs mx-auto"
            type='password'
            placeholder="password"
            {...register("password", { required: true })}
          />
          <input className="border w-fit mx-auto bg-black py-2 px-4 rounded text-white uppercase cursor-pointer active:scale-95" type="submit" value='login'/>
        </form>
      </div>
    </div>
  );
};

export default Login;

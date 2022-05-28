import React, { useEffect } from "react";
import { useAuthState, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const VerifyEmailMessage = () => {
  const [user, loding, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [sendPasswordResetEmail, sending, sendingError] = useSendPasswordResetEmail(
    auth
  );

  const sendVerification = () => {
    sendPasswordResetEmail()
  }

  useEffect(() => {
    let interval = setInterval(async () => {
        if (user.emailVerified) {
            clearInterval(interval);
            navigate("/");
        }
       await user.reload();
    }, 2000);
  }, [user,user?.emailVerified, navigate]);

console.log(user);

  return (
    <div>
        hello {user?.displayName || 'user'} we have sent a verification mail to your account.
      please verify your email to continue.
       goto gmail{" "}
      <a 
      href="https://mail.google.com" 
      target="_blank" 
      rel="noreferrer">
        Gmail
      </a>
      <p>didn't get the mail</p>
      <button onClick={sendVerification}>Send Again</button>
    </div>
  );
};

export default VerifyEmailMessage;

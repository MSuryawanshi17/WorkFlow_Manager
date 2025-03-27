import { useState } from "react";
import { auth, googleProvider } from "../config/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/workflows");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/workflows");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold">Log In</h2>
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded mt-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded mt-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2"
        onClick={handleLogin}
      >
        Log In
      </button>
      <button
        className="bg-red-500 text-white p-2 rounded mt-2"
        onClick={handleGoogleLogin}
      >
        Log In with Google
      </button>
    </div>
  );
};

export default Login;

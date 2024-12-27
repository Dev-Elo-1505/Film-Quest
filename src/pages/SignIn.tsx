import { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      });
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative bg-hero h-screen bg-cover w-full flex flex-col gap-5 items-center justify-center bg-center text-white">
      <div className="absolute bg-black opacity-50 inset-0"></div>
      <h1 className="md:text-3xl z-10 font-bold text-[#1cb8d8]">F I L M Q U E S T</h1>
      <div className="z-10 relative bg-[#0097d4]/50 px-5 py-7 md:w-[400px] flex items-center justify-center flex-col rounded-md backdrop-blur-xl">
        <h2 className="text-2xl mb-5 font-bold">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 bg-[#e8f0fe] rounded-md w-full mb-4"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 bg-[#e8f0fe] rounded-md w-full mb-4"
            />
          </div>

          <div>
            <button type="submit" className="p-2 bg-[#01b4e4] rounded-md w-full mb-4 hover:brightness-90">Sign In</button>
          </div>
          <div>
            <p>
              New to FilmQuest? <NavLink to="/signup" className="text-red-500">Sign up now</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

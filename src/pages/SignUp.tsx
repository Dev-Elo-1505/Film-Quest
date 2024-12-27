import { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/signin");
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative bg-hero h-screen bg-cover w-full flex flex-col gap-5 items-center justify-center bg-center text-white">
      <div className="absolute bg-black opacity-50 inset-0"></div>
      <h1 className="md:text-3xl z-10 font-bold text-red-500">F I L M Q U E S T</h1>
      <div className="z-10 relative bg-[#060202]/50 px-5 py-7 md:w-[400px] flex items-center justify-center flex-col rounded-md backdrop-blur-xl">
        <h2 className="text-2xl mb-5 font-bold">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              required
              placeholder="Alex Doe"
              onChange={(e) => setName(e.target.value)}
              className="p-2 bg-[#333] rounded-md w-full mb-4"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 bg-[#333] rounded-md w-full mb-4"
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
              className="p-2 bg-[#333] rounded-md w-full mb-4"
            />
          </div>
          <div>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="********"
              className="p-2 bg-[#333] rounded-md w-full mb-4"
            />
          </div>
          <div>
            <button type="submit" className="p-2 bg-red-500 rounded-md w-full mb-4 hover:brightness-90">Sign Up</button>
          </div>
          <div>
            <p>
              Already have an account? <NavLink to="/signin" className="text-red-500">Sign in</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

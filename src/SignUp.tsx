import { useState } from "react";
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleCreateUser = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <div className="bg-hero h-screen bg-cover w-full flex items-center justify-center">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div><input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div>
            <input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              name="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div><input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
          <div>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div><button type="submit">Sign Up</button></div>
          <div>
            <p>
              Have an account? <a href="#">Sign in now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

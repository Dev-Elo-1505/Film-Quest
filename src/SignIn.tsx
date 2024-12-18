import { useState } from "react";
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password)
    alert("User signed in successfully")
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <div className="bg-hero h-screen bg-cover w-full flex items-center justify-center">
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
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
          
          <div><button type="submit">Sign In</button></div>
          <div>
            <p>
              New to FilmQuest? <a href="#">Sign up now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

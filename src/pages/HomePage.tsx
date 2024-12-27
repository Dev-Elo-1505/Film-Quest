
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movie from "../components/Movie";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase"
import Hero from "../components/Hero";

const HomePage = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("no user");
      }
    })
  }, []);
  return (
    <section>
      <Header />
      <Hero />
      <Movie />
        {/* 
        <Movie />
        <Footer /> */}
    </section>
  )
}

export default HomePage
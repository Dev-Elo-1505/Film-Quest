import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  return (
    <section>
     <Header />
     <h2 className="text-xl p-5 font-bold text-[#1D1B31]">Movies</h2>
      <Movie />
    </section>
  );
}

export default App;

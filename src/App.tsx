import Movie from "./components/Movie";

function App() {
  return (
    <section className="px-5 py-2">
      <header className="flex items-center justify-center">
        <div className="text-primary font-bold">FILMQUEST</div>
        <div className="flex items-center border border-gray-300 rounded-full">
          <input type="text" name="search" id="search" className="" />
          <button className="">Search</button>
        </div>
      </header>
      <Movie />
    </section>
  );
}

export default App;

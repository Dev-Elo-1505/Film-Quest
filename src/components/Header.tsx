import { MdMovie } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-hero h-screen bg-cover text-center font-bold text-white flex flex-col gap-10 p-5 lg:py-5 lg:px-20 w-full">
      <h1 className="md:text-2xl">F I L M Q U E S T</h1>
      <div className="h-4/5 flex flex-col justify-center">
        <h2 className="text-3xl">
          Find Your Next <br></br>Favourite Film Instantly!
        </h2>
        <div className="mt-5 flex items-center justify-center gap-3 border bg-white p-2">
          <MdMovie className="text-red-600 text-2xl" />
          <input
            className="w-full border-none bg-transparent focus:border-none focus:outline-none text-black font-normal"
            type="text"
            placeholder="E.g Vampire Diaries"
          />
          <button className="bg-red-600 p-2">Find</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

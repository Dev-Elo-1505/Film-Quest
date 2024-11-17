import { MdMovie } from "react-icons/md";

const Header = () => {
  return (
    <header className="text-center h-screen text-[#1D1B31] bg-[#F1F2F6] flex justify-center items-center flex-col p-5">
      <h1 className="font-bold text-2xl mb-5">FILMQUEST</h1>
      <h3 className="text-lg font-semibold mb-5">
        Find Your Next Favorite Film, Instantly.
      </h3>
      <div className="flex items-center border border-[#1d1b31] pl-5 pr-2 py-2 rounded-full w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <MdMovie className="text-[#1d1b31] text-lg mr-3" />
        <input
          type="text"
          placeholder="Find movie..."
          className="flex-grow border-0 bg-transparent focus:outline-none text-[#1d1b31] placeholder-gray-500"
        />
        <button className="bg-[#E94560] px-4 py-2 rounded-full text-white ml-2 transition-transform duration-200 hover:scale-105">
          Find
        </button>
      </div>
    </header>
  );
};

export default Header;



const SearchBar = () => {
  return (
    <div className="w-full rounded-full bg-white flex justify-between items-center ">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent border-0 outline-none ml-4 text-black w-full"
      />
      <button className="rounded-full bg-deepBlue p-4">Search</button>
    </div>
  );
};

export default SearchBar;

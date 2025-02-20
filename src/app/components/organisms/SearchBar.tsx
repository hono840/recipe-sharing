import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="レシピを検索..."
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-300"
      />
    </div>
  );
};

export default SearchBar;

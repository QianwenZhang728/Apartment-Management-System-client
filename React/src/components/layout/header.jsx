import React from "react";

export const Header = () => {
  return (
    <div className="relative text-white w-full py-64 flex flex-col justify-center items-center">
      <img
        className="absolute w-full h-full object-cover opacity-75"
        style={{ zIndex: -10 }}
        src="/assets/img/header.jpg"
        alt="header"
      />
      <p className="font-semibold text-5xl mb-2 px-1">Make room for life</p>
      <p className="font-semibold mb-10">Find your favorite floor plans</p>
      <div className="flex mb-2 justify-center items-center">
        <input
          className="rounded h-8 text-gray-600 px-2"
          placeholder="1 bed 1 bath"
        />
        <button className="border hover:bg-gray-700 hover:text-white py-1 px-2 rounded-lg ml-2">
          <svg
            className="w-4 h-4 mr-2 inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

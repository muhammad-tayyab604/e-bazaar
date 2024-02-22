import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center">
      <Link to={"/"}>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Home
        </button>
      </Link>
      <img
        className="w-[50rem]"
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg"
        alt=""
      />
    </div>
  );
};

export default NoPage;

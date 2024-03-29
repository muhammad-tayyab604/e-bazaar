import React, { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import MyContext from "../../../context/data/myContext";

function AddProduct() {
  const { products, setProducts, addProduct } = useContext(MyContext);
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <Link to={"/dashboard"}>
              <IoArrowBack className="cursor-pointer text-start text-white text-xl mb-4 font-bold" />
            </Link>
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              type="text"
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              type="text"
              name="price"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              onChange={(e) =>
                setProducts({ ...products, imageURL: e.target.value })
              }
              type="text"
              name="imageurl"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              type="text"
              name="category"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              cols="30"
              rows="10"
              name="description"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

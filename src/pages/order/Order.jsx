import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import MyContext from "../../context/data/myContext";
import Loader from "../../components/loader/Loader";

const Order = () => {
  const userId = JSON.parse(localStorage.getItem("user")).user.uid;
  console.log(userId);
  const { mode, loading, order } = useContext(MyContext);
  // console.log(order);
  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className="h-full pt-10">
            {order
              .filter((obj) => obj.userid == userId)
              .map((order, index) => (
                <div
                  key={index}
                  className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                >
                  {order.cartItem.map((item) => (
                    <div className="rounded-lg md:w-2/3">
                      <div
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        style={{
                          backgroundColor: mode === "dark" ? "#282c34" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <img
                          src={item.imageURL}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2
                              className="text-lg font-bold text-gray-900"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {item.title}
                            </h2>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {item.description}
                            </p>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <h2 className="text-6xl text-gray-500 font-bold">Orders are Empty</h2>
        </div>
      )}
    </Layout>
  );
};

export default Order;

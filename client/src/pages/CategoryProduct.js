
import { useParams, useNavigate, Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { AiOutlineReload, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { BsWhatsapp } from "react-icons/bs";
import { useCart } from "../context/cart.js"
import { toast } from "react-hot-toast";
import { BiSearch } from 'react-icons/bi';
import SearchInput from "../components/Form/searchInput";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart()
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      toast.success("Item Removed Successfully")
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      console.log(data?.products)
      console.log(data?.category)
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div>
      <div className='mx-auto max-w-screen-xl min-h-[80vh] sm:p-3 rounded-lg'>
        <div className="mx-2 mt-2">  <SearchInput />
        </div>


        <div className="min-h-[80vh] w-full sm:w-auto up-2 flex-col flex justify-center">

          <div className="w-full min-h-[70vh]  rounded-lg mt-3  sm:p-2">
            <p className='block text-center'>
              <p>
                Category: {category?.name}
              </p>
              <h6>

                {products?.length < 1
                  ? "Showing 0 Results"
                  : `Showing ${products?.length} Results`}
              </h6>
            </p>
            <div className="md:grid md:grid-cols-[60%_40%] p-2">
              <div className='flex flex-wrap  gap-2 m-1'>
                {products.map((p) => (

                  <div key={p._id} className="mb-3 w-[9rem] sm:w-[10rem] lg:w-[13rem] h-[10.5rem] sm:h-[12rem] lg:h-[16rem] grid grid-rows-[40%_60%] lg:grid-rows-[50%_50%] shadow border rounded-lg border-blue-200 bg-gradient-to-b from-blue-200 to-sky-100  ">

                    <div onClick={() => navigate(`/product/${p.slug}`)}
                      target="_blank" className='w-full rounded-lg cursor-pointer hover:opacity-40 px-auto flex justify-center bg-white  overflow-hidden pb-2'>


                      <img className=" object-contain  mx-auto h-auto w-full " src={`/api/v1/product/product-photo/${p._id}`} alt="photo" />


                    </div>

                    <div className="w-full flex flex-col px-2 ">
                      <div className="flex justify-center flex-col gap-1">
                        <div className='pt-2'>
                          <h5 className="my-auto text-md sm:text-lg font-semibold tracking-tight text-gray-700">{p.name}</h5>
                        </div>
                        <div className='hidden lg:inline m-0'>
                          <p className="my-auto text-sm leading-none text-gray-500"> {p.description.substring(0, 50)}...</p>

                        </div>
                        <div className='lg:hidden m-0'>
                          <p className="my-auto !text-xs leading-none text-gray-500"> {p.description.substring(0, 30)}...</p>

                        </div>
                      </div>



                      <div className='flex mt-auto mb-2 flex-row'>
                        <div className="w-full my-auto flex text-md sm:text-lg">
                          <p className="my-auto font-semibold text-gray-700">Rs. {p.price}</p>

                        </div>
                        <div className="w-full text-right m-0 text-xs">

                          <button className="text-white hover:opacity-60 bg-sky-400 shadow-xl text-xs p-2 m-0 rounded-full "
                            onClick={() => {
                              let myCart = [...cart]
                              const index = myCart.findIndex(item => item._id === p._id);

                              if (index === -1) {
                                myCart.push({
                                  ...p,
                                  quantity: 1
                                });
                                const updatedCart = [...myCart];
                                console.log(updatedCart);
                                setCart(updatedCart)
                                localStorage.setItem('cart', JSON.stringify(updatedCart))
                                toast.success("Item Added to Cart")
                              } else {
                                myCart[index].quantity += 1;
                                const updatedCart = [...myCart];
                                setCart(updatedCart);
                                localStorage.setItem("cart", JSON.stringify(updatedCart))
                                console.log(updatedCart);
                                toast.success("Item Added to Cart")
                              }
                            }}
                          >
                            <p className="hidden !text-xs  lg:inline ">Add to Cart</p>
                            <p className="lg:hidden m-0 px-1 py-0 ">+</p>



                          </button>

                        </div>

                      </div>

                    </div>
                  </div>




                ))}
                {products?.length < 1
                  ? <div className="flex flex-col justify-center items-center">
                    <div className="bg-red-100 rounded-lg p-2">
                      <p className="text-xl">We are determined to fulfill your product needs. Give us a call today!</p>

                    </div>

                  </div>
                  : ``}

              </div>
              <div className="hidden bg-gradient-to-b from-blue-500 to-sky-200 rounded-lg p-2 w-full min-v-[40vh] text-center md:block">
                {cart?.map((p) => (
                  <div key={p._id} className="mt-2 p-2 flex flex-row overflow-hidden justify-between h-[4rem]  border rounded-lg bg-gray-100 shadow-xl">

                    <div className="w-[30rem] flex gap-1">
                      <h5 className="my-auto text-left text-md font-bold ">{p.name}</h5>
                    </div>


                    <div className="w-full  justify-center  text-sm flex">
                      <p className="my-auto text-gray-500">x {p.quantity}</p>
                    </div>
                    <div className="w-full justify-end  text-sm flex">
                      <p className="my-auto text-right font-bold text-green-500">Rs.{p.quantity * p.price}</p>
                    </div>
                    <div className="w-full justify-end text-sm flex">
                      <button className="my-auto  font-bold hover:bg-gray-300 transition p-2 rounded-full"
                        onClick={() => {
                          removeCartItem(p._id)
                        }}>
                        <AiOutlineDelete className="text-red-500" size={20} />
                      </button>
                    </div>




                  </div>

                ))}
                {cart?.length ? <>
                  <div className="w-full justify-center mt-2 text-lg flex">
                    <button className="my-auto mt-4 font-bold p-2 py-3 rounded-lg w-full transition  hover:opacity-70 backdrop-blur-md bg-white/30 shadow-xl" onClick={() => navigate("/cart")}>Checkout</button>
                  </div></> : <>
                  <div className="p-2 h-full flex justify-center items-center backdrop-blur-xl bg-white/30 rounded-lg">
                    <p className="block text-center">Your Cart Is Empty</p>
                  </div>
                </>}
              </div>
            </div>
          </div>
          <div className="m-2 flex justify-center p-3">
            {products && products.length < total && (
              <button
                className="rounded-full px-3 p-2 flex flex-row gap-2 bg-gray-700 hover:bg-gray-900 transition text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>

  );
};

export default CategoryProduct;

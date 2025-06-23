import React from "react";
import { BsWhatsapp } from 'react-icons/bs'
import SearchInput from "../components/Form/searchInput.js";
import Accordian from "../components/accordian";
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-cards";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

const Home = () => {
    return (
        <div>
            {/* <div className="cursor-pointer z-50 fixed transition   shadow-green-500 shadow-sm hover:scale-110 hover:animate-none hover:bg-gray-300 border-2 rounded-lg border-green-500 bg-white p-3 right-6 bottom-6">
                <a href="https://wa.me/919999513839" target="_blank">
                    <BsWhatsapp size={20} className="text-green-500" />
                </a>

            </div> */}
            {/* <div className="cursor-pointer z-40 fixed animate-ping transition   shadow-green-500 shadow-sm  hover:bg-gray-300 border-2 rounded-lg border-green-500 bg-white p-3 right-6 bottom-6">
                <a href="https://wa.me/919999513839" target="_blank">
                    <BsWhatsapp size={20} className="text-green-500" />
                </a>

            </div> */}
            <div className='w-full rounded-lg'>
                {/* Section 1: Hero */}
                <section className="flex z-30 justify-center items-center bg-white sm:mt-0 min-h-[60vh] w-full shadow-lg shadow-red-500" id="section1">
                    <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center py-12 px-4">
                        <ScrollAnimation animateOnce={true} animateIn="fadeInDown">
                            <p className="mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                                Order <span className="bg-gradient-to-r from-[#91f0ff] to-[#0099ff] bg-clip-text text-transparent">medicines</span> online, delivered <span className="bg-gradient-to-r from-[#91f0ff] to-[#0099ff] bg-clip-text text-transparent">to your doorstep</span>.
                            </p>
                        </ScrollAnimation>
                        <p className="text-lg text-gray-400 mb-6">
                            Fast, genuine, and affordable pharmacy service. Upload your prescription and get medicines delivered in hours.
                        </p>
                        <div className="w-full max-w-md">
                            <div className="shadow-lg shadow-gray-700 rounded-full">
                                {/* Could be a location search or booking input */}
                                <SearchInput placeholder="Search medicines or enter your location..." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Trusted Brands/Partners */}
                <section className="bg-white border-y border-x-slate-500">
                    <div className="max-w-screen-xl px-4 py-4 mx-auto lg:py-10">
                        <div className="grid link text-gray-500 gap-8 sm:gap-12 grid-cols-6">
                            <a className="flex items-center lg:justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/1200px-Dabur_Logo.svg.png" className="grayscale opacity-60 max-h-[5rem]" alt="Dabur" />
                            </a>
                            <a className="flex items-center lg:justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Patanjali_Logo.svg/1200px-Patanjali_Logo.svg.png" className="grayscale opacity-60 max-h-[9rem]" alt="Patanjali" />
                            </a>
                            <a className="flex items-center lg:justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png" className="grayscale opacity-60 max-h-[5rem]" alt="ITC" />
                            </a>
                            <a className="flex items-center lg:justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Cipla_logo.svg" className="grayscale opacity-60 max-h-[5rem]" alt="Cipla" />
                            </a>
                            <a className="flex items-center lg:justify-center">
                                <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1453809541/vjd7wnxl5jmkbf6rzd8j.png" className="grayscale opacity-60 max-h-[7rem]" alt="Sun Pharma" />
                            </a>
                            <a className="flex items-center lg:justify-center">
                                <img src="https://www.ima-india.org/ima/images/IMA%20LOGO.jpg" className="grayscale opacity-60 max-h-[7rem]" alt="IMA" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section 3: How it works */}
                <section className="flex z-20 py-12 bg-gradient-to-r from-blue-600 to-blue-400 justify-center flex-col items-center min-h-[30vh] w-full">
                    <div className="w-full max-w-3xl mx-auto mb-8 px-4">
                        <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
                            <p className="flex items-center text-3xl text-white font-semibold text-center sm:text-left">
                                <hr className="w-[2rem] rounded-full bg-white h-1.5 my-auto border border-white mr-2" /> How It Works
                            </p>
                        </ScrollAnimation>
                    </div>
                    <div className="w-full max-w-4xl px-2">
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                            <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center border border-blue-500 shadow-gray-300 p-4 rounded-lg min-w-[180px] max-w-[260px] mx-auto">
                                <img className="p-2 mx-auto h-[5rem] md:h-[7rem]" src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="Search Medicines" />
                                <p className="text-center text-lg font-semibold mt-2">Search Medicines</p>
                            </div>
                            <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center border border-blue-500 shadow-gray-300 p-4 rounded-lg min-w-[180px] max-w-[260px] mx-auto">
                                <img className="p-2 mx-auto h-[5rem] md:h-[7rem]" src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Upload Prescription" />
                                <p className="text-center text-lg font-semibold mt-2">Upload Prescription</p>
                            </div>
                            <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center border border-blue-500 shadow-gray-300 p-4 rounded-lg min-w-[180px] max-w-[260px] mx-auto">
                                <img className="p-2 mx-auto h-[5rem] md:h-[7rem]" src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png" alt="Get Delivery" />
                                <p className="text-center text-lg font-semibold mt-2">Get Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Gallery/Testimonials */}
                <section className="pb-8 pt-3 sm:pb-12 sm:pt-6 flex items-center justify-center min-h-[40vh]">
                    <div className="w-full bg-transparent rounded-lg">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={2}
                            modules={[Autoplay, Pagination, Navigation]}
                            navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            className="h-[20rem] sm:h-[25rem] w-full bg-transparent"
                            id="bannerSwiper"
                            breakpoints={{
                                360: { slidesPerView: 1 },
                                440: { slidesPerView: 1 },
                                768: { slidesPerView: 1.5 },
                                1000: { slidesPerView: 2 },
                            }}
                        >
                            <SwiperSlide id="bannerSlide" className="overflow-hidden h-[10rem] rounded-lg">
                                <img src="https://assets.truemeds.in/Images/dwebbanner3.jpeg" className="h-full w-full object-cover" alt="Medicine Delivery" />
                            </SwiperSlide>
                            <SwiperSlide id="bannerSlide" className="overflow-hidden h-[10rem] rounded-lg">
                                <img src="https://cdn01.pharmeasy.in/dam/banner/banner/1dc1375328c-EASY22.jpg" className="h-full w-full object-cover" alt="Discounts" />
                            </SwiperSlide>
                            <SwiperSlide id="bannerSlide" className="overflow-hidden h-[10rem] rounded-lg">
                                <img src="https://assets.truemeds.in/Images/dwebbanner2.jpeg" className="h-full w-full object-cover" alt="Trusted Pharmacy" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* Section 5: Why Choose ChemShop */}
                <section className="min-h-[60vh]">
                    <section className="bg-blue-100 shadow-lg border-gray-300 border-t border-b">
                        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                            <div className="col-span-2 mb-8">
                                <p className="text-lg font-medium text-blue-600">Serving Delhi NCR</p>
                                <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">Trusted by thousands of families</h2>
                                <p className="font-light text-gray-700 sm:text-xl">
                                    ChemShop delivers genuine medicines, wellness products, and healthcare essentials to your home. Certified pharmacists, easy ordering, and fast delivery.
                                </p>
                                <div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
                                    <div>
                                        <a href="#" className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800">
                                            Contact Us
                                            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800">
                                            Become a Partner Pharmacy
                                            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                                <div className="p-4 flex flex-col justify-between rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg">
                                    <div>
                                        <svg className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" /></svg>
                                        <h3 className="mb-2 text-2xl font-bold text-gray-100">Express Delivery</h3>
                                    </div>
                                    <p className="font-light dark:text-gray-200">Get medicines in hours</p>
                                </div>
                                <div className="p-4 flex flex-col justify-between rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg">
                                    <div>
                                        <svg className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                                        <h3 className="mb-2 text-2xl font-bold text-gray-100">Certified Pharmacists</h3>
                                    </div>
                                    <p className="font-light dark:text-gray-200">Expert advice & support</p>
                                </div>
                                <div className="p-4 flex flex-col justify-between rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg ">
                                    <div>
                                        <svg className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
                                        <h3 className="mb-2 text-2xl font-bold text-gray-100">Genuine Medicines</h3>
                                    </div>
                                    <p className="font-light dark:text-gray-200">100% authentic products</p>
                                </div>
                                <div className="p-4 flex flex-col justify-between rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg ">
                                    <div>
                                        <svg className="w-10 h-10 mb-2 text-blue-600 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                                        <h3 className="mb-2 text-2xl font-bold text-gray-100">Easy Payments</h3>
                                    </div>
                                    <p className="font-light dark:text-gray-200">Pay online or on delivery</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* Section 6: FAQ */}
                <section className="w-full py-4 bg-white flex justify-center">
                    <div className="w-full mt-6 sm:w-3/4">
                        <p className="block text-3xl font-semibold text-center sm:text-left">
                            <span className="text-blue-600">F</span>requently <span className="text-blue-600">A</span>sked <span className="text-blue-600">Q</span>uestions
                        </p>
                        <Accordian />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
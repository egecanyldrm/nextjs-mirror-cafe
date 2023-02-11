import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import comment from '@/assets/comment';
import { Avatar, Rate } from 'antd';
import { FaTripadvisor, FaGoogle, FaFoursquare } from 'react-icons/fa';

const platform_icons = {
    Tripadvisor: <FaTripadvisor />,
    Google: <FaGoogle />,
    Foursquare: <FaFoursquare />,
}

const Comments = () => {
    return (
        <section className=' bg-white text-black py-8'>
            <h1 className='text-center '>Customer Feedbacks </h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    comment.map((comment, key) => (
                        <SwiperSlide key={key}>
                            <div className=' flex flex-col  h-96 md:h-72  border rounded-lg shadow-md my-12 mx-5  px-5 pb-10  pt-5' key={key}>
                                <div className='flex justify-start mb-3   '>
                                    <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{comment.username.at(0)}</Avatar>
                                    <div className='flex  flex-col ml-5'>
                                        <span className='flex font-bold gap-3'>{comment.username}
                                            <span className='flex gap-3 justify-start items-center font-light text-slate-400'>  {comment.platform} {platform_icons[comment.platform]} </span>
                                        </span>
                                        <Rate disabled defaultValue={5} />
                                    </div>
                                </div>
                                <div className='pr-2 '>
                                    <p>{comment.comment}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                    )
                    )
                }

            </Swiper>
        </section>
    )
}

export default Comments


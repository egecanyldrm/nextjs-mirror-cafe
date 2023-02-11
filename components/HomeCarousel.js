import React from "react";
import Image from "next/image";
import MirrorImage from "@/assets/carousel-1.jpg";
import MirrorImage2 from "@/assets/miror-1.jpeg";
import { Carousel } from "antd";
import imageLoader from "@/assets/loader";
const HomeCarousel = () => {
  return (
    <section>
      <Carousel autoplay autoplaySpeed={2500}>
        <div className=" h-half w-full relative text-white">
          <Image
            src={MirrorImage}
            alt="Miror Home Carousel Image "
            priority
            fill
            unoptimized
            className="object-cover brightness-50"
            loader={({ src }) => src}
          />
          <div className=" absolute w-full h-full  flex flex-column items-center justify-center">
            <div className="text-center">
              <h1 className=" text-3xl font-extrabold md:text-7xl">
                MIRROR <br /> GASTRO PUB
              </h1>
              <br />
              <p className=' max-w-6xl'>
                Mirror Public House is the most visited gastro bar in Antalya, offering a comfortable environment for visitors with a high level of dining experience. Offering delicious and gourmet food, the pub also offers its visitors a fun and relaxed atmosphere with a variety of activities.
              </p>
            </div>
          </div>
        </div>
        <div className=" h-half w-full relative text-white">
          <Image
            src={MirrorImage2}
            alt="Miror Home Carousel Image"
            priority
            fill
            unoptimized
            className="object-cover brightness-50"
            loader={({ src }) => src}
          />
          <div className=" absolute w-full h-full  flex flex-column items-center justify-center">
            <div className="text-center">
              <h1 className=" text-3xl font-extrabold md:text-7xl">
                MIRROR <br /> GASTRO PUB
              </h1>
              <br />
              <p className=' max-w-6xl'>
                Mirror Public House is the most visited gastro bar in Antalya, offering a comfortable environment for visitors with a high level of dining experience. Offering delicious and gourmet food, the pub also offers its visitors a fun and relaxed atmosphere with a variety of activities.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HomeCarousel;

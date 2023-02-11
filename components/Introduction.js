import React from "react";
import Image from "next/image";
import ExampleImage from "@/assets/miror-1.jpeg";
import imageLoader from "@/assets/loader";

function Introduction() {
  return (
    <section className="  bg-white text-black py-16   md:py-28 px-4  md:px-24 flex flex-col md:flex-row mx-auto">
      <div className="basis-1/2   text-center  md:px-24 mr-5">
        <h1 className="text-4xl md:text-6xl tracking-widest ">GASTRO PUB </h1>
        <h3 className="font-extrabold my-5 text-xl tracking-widest">LOCAL BAR</h3>
        <p className=" text-gray-400 leading-loose">
          {/* Yemek deneyimin üst seviyede olan ziyaretçilerin rahat bir ortam sunan
          Mirror Public House antalyanın en çok ziyaret edilen gastro bardır.
          Lezzetli ve gurme yiyecekler sunan pub ayrıca ziyaretçilerine çeşitli
          aktiviteler ile eğlenceli ve rahat bir ortam sunmaktadır.{" "} */}
          Mirror Public House is the most visited gastro bar in Antalya, offering a comfortable environment for visitors with a high level of dining experience. Offering delicious and gourmet food, the pub also offers its visitors a fun and relaxed atmosphere with a variety of activities.
        </p>
      </div>
      <div className="basis-1/2 relative  h-96 ">
        <Image
          className="object-cover rounded-lg hidden md:block  "
          fill
          alt="Pub view"
          src={ExampleImage}
          unoptimized
          loader={({ src }) => src}
        />
      </div>
    </section>
  );
}

export default Introduction;

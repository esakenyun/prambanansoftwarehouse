import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

export default function OurProductSection() {
  const product = [
    {
      id: 1,
      name: "BPLJ PUPR",
      imageURL: "/product/bplj_pupr.png",
    },
    {
      id: 2,
      name: "Binder",
      imageURL: "/product/binder.png",
    },
    {
      id: 3,
      name: "EasyBook",
      imageURL: "/product/easybook.png",
    },
    {
      id: 4,
      name: "Stylish",
      imageURL: "/product/stylish.png",
    },
    {
      id: 5,
      name: "Edutrain",
      imageURL: "/product/edutrain.png",
    },
    {
      id: 6,
      name: "OniFarm",
      imageURL: "/product/onifarm.png",
    },
    {
      id: 7,
      name: "Pertamina",
      imageURL: "/product/pertamina.png",
    },
  ];

  return (
    <div className="px-[5%] md:px-[3%] lg:px-[8%] py-[7%]">
      <p className="text-right text-2xl text-primary-600 font-medium">Our Product</p>
      <div className="flex justify-center w-full pt-[3%]">
        <div className="w-[80%] bg-primary-50 rounded-lg backdrop-blur-2xl">
          <div className="py-[4%] px-[5%]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              slidesPerView={"auto"}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              // pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper">
              {product.map((item) => (
                <SwiperSlide key={item.id} className="flex flex-col items-center">
                  <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image src={item.imageURL} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-auto h-auto object-contain" priority />
                  </div>
                  <h1 className="md:text-3xl italic font-semibold text-center text-primary-900 mt-3">{item.name}</h1>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

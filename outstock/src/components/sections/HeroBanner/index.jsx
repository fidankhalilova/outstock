import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative mb-60">
      <div className="relative">
        <img
          src="https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide1.jpg?v=1691976327"
          alt=""
          className="w-full h-full object-cover relative"
        />
        <div
          id="promoText"
          className="absolute top-0 left-[80px] h-full w-[600px] z-2 flex flex-col justify-center items-start gap-3"
        >
          <h3 className="text-[35px] font-semibold mt-4">
            Bottle With Wooden Cork
          </h3>
          <p className="text-gray-500 mt-2 text-[20px]">
            The Newtown sofa range is the first product Jonas Wagell has
            designed for Zaozuo, but one of the last to be finalized and
            launched.
          </p>
          <button className="px-10 py-4 bg-transparent border-2 border-black text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]">
            Discover More
          </button>
        </div>
      </div>
      <div className="absolute top-[650px] w-full z-5 flex justify-center items-center gap-0">
        <div id="category-post" className="py-6 pl-6 pr-3 bg-white relative">
          <div className="overflow-hidden">
            <img
              src="https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner1_420x231.jpg?v=1690860139"
              alt=""
              className="w-[420px] h-[230px] object-cover hover:scale-[1.05] duration-100"
            />
          </div>
          <div className="absolute h-full top-0 left-14 flex flex-col justify-center items-start">
            <h3 className="text-[16px] font-semibold mt-4">
              British Made Pocket <br /> Knife - Oak
            </h3>
            <p className="text-gray-500 mt-2 text-[12px]">Discover more</p>
          </div>
        </div>
        <div id="category-post" className="py-6 px-3 bg-white relative">
          <div className="overflow-hidden">
            <img
              src="https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner1_420x231.jpg?v=1690860139"
              alt=""
              className="w-[420px] h-[230px] object-cover hover:scale-[1.05] duration-100"
            />
          </div>
          <div className="absolute h-full top-0 left-14 flex flex-col justify-center items-start">
            <h3 className="text-[16px] font-semibold mt-4">
              British Made Pocket <br /> Knife - Oak
            </h3>
            <p className="text-gray-500 mt-2 text-[12px]">Discover more</p>
          </div>
        </div>
        <div id="category-post" className="py-6 pr-6 pl-3 bg-white relative">
          <div className="overflow-hidden">
            <img
              src="https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner1_420x231.jpg?v=1690860139"
              alt=""
              className="w-[420px] h-[230px] object-cover hover:scale-[1.05] duration-100"
            />
          </div>
          <div className="absolute h-full top-0 left-14 flex flex-col justify-center items-start">
            <h3 className="text-[16px] font-semibold mt-4">
              British Made Pocket <br /> Knife - Oak
            </h3>
            <p className="text-gray-500 mt-2 text-[12px]">Discover more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

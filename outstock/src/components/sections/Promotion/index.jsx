import React from "react";

const Promotion = () => {
  return (
    <div className="flex justify-center my-40 gap-10">
      <div className="w-1/2 relative">
        <img
          src="https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner4_950x457.jpg?v=1690860139"
          alt=""
          className="object-cover w-full h-full relative"
        />
        <div
          id="promoText"
          className="absolute top-0 left-[80px] h-full w-[350px] z-2 flex flex-col justify-center items-start gap-3"
        >
          <p className="text-[#bc8246] text-md">Products Essentials</p>
          <h3 className="text-[24px] font-semibold mt-4">
            Bottle With Wooden Cork
          </h3>
          <p className="text-gray-500 mt-2 text-[14px]">
            The Newtown sofa range is the first product Jonas Wagell has
            designed for Zaozuo, but one of the last to be finalized and
            launched.
          </p>
          <button className="px-10 py-4 bg-transparent border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]">
            Load More
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative hidden md:block">
        <img
          src="https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner4_950x457.jpg?v=1690860139"
          alt=""
          className="object-cover w-full h-full relative"
        />
        <div
          id="promoText"
          className="absolute top-0 left-[80px] h-full w-[350px] z-2 flex flex-col justify-center items-start gap-3"
        >
          <p className="text-[#bc8246] text-md">Products Essentials</p>
          <h3 className="text-[24px] font-semibold mt-4">
            Bottle With Wooden Cork
          </h3>
          <p className="text-gray-500 mt-2 text-[14px]">
            The Newtown sofa range is the first product Jonas Wagell has
            designed for Zaozuo, but one of the last to be finalized and
            launched.
          </p>
          <button className="px-10 py-4 bg-transparent border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

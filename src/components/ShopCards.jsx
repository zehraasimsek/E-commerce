import React from "react";
import img1 from "/assets/images/shopcard1.jpg";
import img2 from "/assets/images/shopcard2.png";
import img3 from "/assets/images/shopcard3.png";

export default function ShopCards() {
  return (
    <section className="flex flex-col items-center gap-4 py-6 px-4 md:flex-row md:justify-center md:gap-6 md:px-20">
      {/* Left - Large Card */}
      <div
        className="relative bg-cover bg-center w-[345px] h-[556px] md:w-[600px] md:h-[574px]"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Mavi dikdörtgen */}
        <div
          className="
          absolute 
          bg-[#2D8BC0BF] 
          text-white 
          w-[346px] h-[238px] 
          top-[318px] left-[-1px] 
          pt-[5.5rem] pb-6 px-8
          md:pt-[5rem] md:px-12 md:pb-4 md:left-0 md:bottom-0 md:top-auto md:left-0
        "
        >
          <h2 className="text-xl font-bold leading-7 md:text-2xl md:leading-8">
            Top Product Of
            <br />
            the Week
          </h2>
          <button className="mt-4 border border-white px-6 py-3 text-sm font-bold hover:cursor-pointer rounded-lg">
            EXPLORE ITEMS
          </button>
        </div>
      </div>

      {/* Right - Small Cards */}
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Small Card 1 */}
        <div
          className="relative bg-cover bg-center w-[344px] h-[398px] md:w-[500px] md:h-[276px]"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div
            className="
          absolute 
          bg-[#2D8BC0BF] 
           text-white 
            w-[346px] h-[238px] 
           top-[160px] left-[-1px] 
           pt-[5.5rem] pb-6 px-8
         	md:pt-[3rem]
           md:w-[310px] md:h-[173px] md:left-0 md:bottom-0 md:top-auto
             "
          >
            <h2 className="text-xl font-bold leading-7 md:text-2xl md:leading-8">
              <span className="block md:hidden">
                Top Product Of
                <br />
                the Week
              </span>
              <span className="hidden  md:text-[20px] md:block">
                Top Product Of the Week
              </span>
            </h2>
            <button className="mt-4 border border-white px-6 py-3 text-sm font-bold hover:cursor-pointer rounded-lg">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        {/* Small Card 2 */}
        <div
          className="relative bg-cover bg-center w-[344px] h-[398px] md:w-[500px] md:h-[276px]"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div
            className="
            absolute 
            bg-[#2D8BC0BF] 
            text-white 
            w-[346px] h-[238px] 
            top-[160px] left-[-1px] 
            pt-[5.5rem] pb-6 px-8
            md:pt-[2.15rem]
            md:w-[325px] md:h-[153px] md:left-0 md:bottom-0 md:top-auto
          "
          >
            <h2 className="text-xl font-bold leading-7 md:text-2xl md:leading-8">
              <span className="block md:hidden">
                Top Product Of
                <br />
                the Week
              </span>
              <span className="hidden md:text-[20px] md:block">
                Top Product Of the Week
              </span>
            </h2>
            <button className="mt-4 border border-white px-6 py-3 text-sm font-bold hover:cursor-pointer rounded-lg">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

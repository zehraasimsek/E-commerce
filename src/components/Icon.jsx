import React from "react";
const images = [
  {
    src: "/assets/icon/col-md-1.png",
    className: "w-[153px] h-[50px] lg:h-[34px] mb-4",
  },
  {
    src: "/assets/icon/col-md-2.png",
    className: "w-[146px] h-[99px] lg:h-[59px] mb-3",
  },
  {
    src: "/assets/icon/col-md-3.png",
    className: "w-[152px] h-[109px]  lg:h-[75px] mb-5",
  },
  {
    src: "/assets/icon/col-md-4.png",
    className: "w-[149px] h-[60px]  lg:h-[42px] mb-4",
  },
  {
    src: "/assets/icon/col-md-5.png",
    className: "w-[151px] h-[92px] lg:h-[62px] mb-4 ",
  },
  {
    src: "/assets/icon/col-md-6.png",
    className: "w-[151px] h-[142px] lg:h-[72px]",
  },
];
export default function IconImages() {
  return (
    <div className="flex items-center justify-center w-[414px] h-[1173px] lg:w-[1440px] lg:h-[175px] bg-white mx-auto">
      <div
        className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8
                      w-[414px] h-[952px] lg:w-[1440px] lg:h-[175px]"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`resim-${i + 1}`}
            className={`${img.className} object-contain`}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";

import Image from "next/image";

import chef1 from "/product_img.png";


 
function MeetShef() {
  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          
        
        <Image
  src="/product_img.png"
  alt="Product Image"
  width={200}  // Set the width
  height={200}  // Set the height
  className="cursor-pointer"
/>
         
        </div>
      </section>
    </>
  );
}

export default MeetShef;
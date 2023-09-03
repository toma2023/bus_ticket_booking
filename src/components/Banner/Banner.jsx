import React from "react";
import Container from "../Container/Container";
import banner_city from "../../../public/city_banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="">
          <p className=""> Rakib tmk valobasi</p>
        </div>
      </Container>
      <div  style={{backgroundImage: `url(${banner_city})`}} className=" w-[100vw] h-[50px] bg-red-500">
        
      </div>
    </div>
  );
};

export default Banner;

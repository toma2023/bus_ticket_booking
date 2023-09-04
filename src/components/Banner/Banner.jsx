import React from "react";
import Container from "../Container/Container";
import banner_city from "../../../public/city_banner.png";
import Image from "next/image";
import "./Banner.css"
import running_bus from "../../../public/running_bus.png"

const Banner = () => {
  return (
    <div className=" pb-28 city_banner_container relative ">
      <Container>
        <div className="mt-24 flex items-center justify-between">
          <div className="w-[50%] ">
            <h2 className="text-5xl font-semibold">Get Your Ticket Online,</h2>
            <h2 className="text-5xl mt-3 font-semibold">Easy and Safely</h2>
            <button className="mt-10 bg-[#26A85E] px-4 py-2 text-white rounded-md">
              GET TICKET NOW
            </button>
          </div>
          <div className="w-[50%] ">
            <p className="text-2xl font-semibold mb-6">Choose Your Ticket</p>
            <div className="p-10 shadow-2xl">
              <div className="mt-7 flex justify-between ">
                <select className="select select-bordered w-[45%] max-w-xs rounded-sm border-[#26A85E]">
                  <option disabled selected>
                    Pickup Point
                  </option>
                  <option>Kansas</option>
                  <option>Dallas</option>
                  <option>Wichita</option>
                  <option>Echo Bass</option>
                  <option>Emi Davenport</option>
                </select>
                <select className="select select-bordered w-[45%] max-w-xs rounded-sm border-[#26A85E]">
                  <option disabled selected>
                    Dropping Point
                  </option>
                  <option>Kansas</option>
                  <option>Dallas</option>
                  <option>Wichita</option>
                  <option>Echo Bass</option>
                  <option>Emi Davenport</option>
                </select>
              </div>
              <div className="mt-6 w-full ">
                <input
                  type="text"
                  placeholder="Type here"
                  className=" input input-bordered w-full border-[#26A85E]"
                />             
              </div>

              <div className="flex items-center justify-center">
              <button className="mt-10 bg-[#26A85E] px-16 py-2 text-white rounded-md">
                  Find Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
     <div className="running_bus_container absolute bottom-0 -right-[200px]">
     <Image 
      src={running_bus}
      width={200}
      height={200}
      alt="Picture of the author"
    />
     </div>
    </div>
  );
};

export default Banner;

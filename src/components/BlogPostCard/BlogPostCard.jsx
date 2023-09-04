import Image from "next/image";
import React from "react";
import card_1 from "../../../public/card_1.jpg";
import card_2 from "../../../public/card_2.jpg";
import card_3 from "../../../public/card_3.jpg";
import { HiOutlineCalendar, IconName } from "react-icons/hi";

const BlogPostCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 py-10">
      <div className="card card-compact w-[100%] bg-base-100 shadow-xl rounded-sm">
        <figure>
          <Image
            src={card_1}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2 py-3">
            <div>
              <HiOutlineCalendar className="text-[#26A85E]" />
            </div>
            <p className=" text-[#A5A5A5]">19 Feb 2022</p>
          </div>
          <div class="border-t border-[#E8E9EB] mb-4"></div>
          <h3 className="font-semibold text-2xl hover:text-[#0E9E4D] ">
            The standard Lorem Ipsum...
          </h3>
          <p className="text-[#969696] pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
      <div className="card card-compact w-[100%] bg-base-100 shadow-xl rounded-sm">
        <figure>
          <Image
            src={card_2}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2 py-3">
            <div>
              <HiOutlineCalendar className="text-[#26A85E]" />
            </div>
            <p className=" text-[#A5A5A5]">19 Feb 2022</p>
          </div>
          <div class="border-t border-[#E8E9EB] mb-4"></div>
          <h3 className="font-semibold text-2xl hover:text-[#0E9E4D] ">
            The standard Lorem Ipsum...
          </h3>
          <p className="text-[#969696] pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
      <div className="card card-compact w-[100%] bg-base-100 shadow-xl rounded-sm">
        <figure>
          <Image
            src={card_3}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2 py-3">
            <div>
              <HiOutlineCalendar className="text-[#26A85E]" />
            </div>
            <p className=" text-[#A5A5A5]">19 Feb 2022</p>
          </div>
          <div class="border-t border-[#E8E9EB] mb-4"></div>
          <h3 className="font-semibold text-2xl hover:text-[#0E9E4D] ">
            The standard Lorem Ipsum...
          </h3>
          <p className="text-[#969696] pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;

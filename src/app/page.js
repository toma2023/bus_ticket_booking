import Amenities from "@/components/Amenities/Amenities";
import Banner from "@/components/Banner/Banner";
import BlogPost from "@/components/BlogPost/BlogPost";
import HappyClient from "@/components/HappyClient/HappyClient";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <Amenities/>
      <Testimonials/>
      <HappyClient/>
      <BlogPost/>
    </div>
  );
}

import React from "react";
import styles from "./topweeklyblogs.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const TopWeeklyBlogs = ({ topweeklyblogs }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoPlay: true,
    speed: 100,
    autoPlaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {topweeklyblogs?.map((blog: any) => (
          <div key={blog._id}>
            <Image
              src={blog.image}
              alt={blog.heading}
              height={425}
              width={950}
            />
            <h5>A {blog.category} Blog</h5>
            <h2>{blog.heading}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopWeeklyBlogs;

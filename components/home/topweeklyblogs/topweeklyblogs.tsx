import React from "react";
import styles from "./topweeklyblogs.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
const PositiveThoughts = ({ topweeklyblogs }: any) => {
  return (
    <React.Fragment>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {topweeklyblogs?.map((blog: any) => (
          <Link
            href={`/blogs/${blog.category}/${blog.blogslug}`}
            className={styles.imagediv}
          >
            <Image
              src={blog.image}
              alt={blog.heading}
              key={blog._id}
              fill
              sizes="100%"
            />
            <div className={styles.content}>
              <p>A {blog.category} Blog</p>
              <h1>{blog.heading}</h1>
            </div>
          </Link>
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default PositiveThoughts;

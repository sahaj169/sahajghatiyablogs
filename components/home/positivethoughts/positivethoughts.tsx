import React from "react";
import styles from "./positivethoughts.module.scss";
import Heading from "../../ui/heading/heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
const PositiveThoughts = ({ positivethoughts }: any) => {
  const InsideCarousel = positivethoughts?.map((positiveThought: any) => (
    <div className={styles.imagediv} key={positiveThought._id}>
      <Image
        src={positiveThought.image}
        alt={positiveThought.title}
        fill
        sizes="100%"
      />
    </div>
  ));
  return (
    <React.Fragment>
      <Heading>Some Positive Thoughts</Heading>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
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
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
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
        {InsideCarousel}
      </Carousel>
    </React.Fragment>
  );
};

export default PositiveThoughts;

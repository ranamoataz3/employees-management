import { Carousel } from "antd";
import React from "react";
import styles from "./carousel.module.css"

const CarouselImg = ({ images }) => {
  const contentStyle = {
    height: "200px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay arrows>
      {images.map((img, index) => (
        <div key={index} className={styles.container}>
          <img
            src={img.src}
            alt="img"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImg;

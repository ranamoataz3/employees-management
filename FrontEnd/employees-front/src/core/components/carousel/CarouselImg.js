import { Carousel, ConfigProvider } from "antd";
import React from "react";
import "./carousel.css";

const CarouselImg = ({ images }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 60,
            colorBgContainer: "#4ab2b6",
            dotWidth: 32,
            dotActiveWidth: 64,
            dotHeight: 5,
          },
        },
      }}
    >
      <Carousel autoplay arrows>
        {images.map((img, index) => (
          <div key={index} className="carocontainer">
            <img src={img.src} alt="img" />
          </div>
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default CarouselImg;

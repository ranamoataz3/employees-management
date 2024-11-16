import { Carousel, ConfigProvider } from "antd";
import React from "react";
import "./carousel.css";

const CarouselImg = ({ data }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 60,
            colorBgContainer: "#4ab2b6",
            dotWidth: 8,
            dotActiveWidth: 8,
            dotHeight: 8,
          },
        },
      }}
    >
      <Carousel autoplay arrows>
        {data.map((img, index) => (
          <div key={index} className="carocontainer">
            <img src={img.src} alt="img" />
          </div>
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default CarouselImg;

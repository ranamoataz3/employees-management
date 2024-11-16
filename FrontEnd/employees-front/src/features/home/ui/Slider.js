import imgs from "../data/SliderImgs";
import CarouselImg from "../../../core/components/carousel/CarouselImg";

const Slider = () => {
  return (
    <div>
      <CarouselImg data={imgs} />
    </div>
  );
};

export default Slider;

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <div className="w-[800px] h-[200px] rounded-2xl">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
      >
        <div className="" data-src="https://www.trainings.industrieshelpinghands.com/admin/uploads/sliders/Original.png" />
        <div data-src="https://www.trainings.industrieshelpinghands.com/admin/uploads/sliders/3_D_2nd1.png" />
        <div data-src="https://www.trainings.industrieshelpinghands.com/admin/uploads/sliders/Original.png" />
        <div data-src="https://www.trainings.industrieshelpinghands.com/admin/uploads/sliders/3_D_2nd1.png" />
      </AutoplaySlider>
    </div>
  );
};

export default Slider;

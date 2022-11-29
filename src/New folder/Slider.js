import React, { useEffect, useState } from "react";
import SliderContent from "./Slidercontent";
import Dots from "./Dots";
import Arrows from "./Arrow";
import sliderImage from "./sliderImage";
import "./Slider.css";
import image10 from './image/10.png'
import image1 from './image/s1.jpg'
import image2 from './image/s2.jpg'
import image3 from './image/s3.jpg'

const len = sliderImage.length - 1;
function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
var slides = document.getElementsByClassName("slide");
// var btn = document.getElementsByClassName("navigation");
var dots=document.getElementsByClassName("btn");
// var total_slide = slide.length;
// var i,index=0;
// setInterval(function(){
//     index+=1;
//     control(index);
// },4000);

// function control(a){
//     if(a>total_slide-1){
//     index=0;
// }
//    if(a<0){
//     index=total_slide-1;
// }
// if(a<total_slide && a>=0){
//   index=a;
// }
// for(i=0;i<total_slide;i++){
//     slide[i].classList.remove("active");
//     dots[i].classList.remove("active");
// // }
// slide[index].classList.add("active");
// dots[index].classList.add("active");
// slide[index].style.display='inline-block';
// dots[index].style.display='inline-block';
// }
// }
  return (

    <div className="slider-container3">
      <div className="container3">
            <div className="box">
                <img src={image10} alt=""/>
            </div>
      </div>
      <div>
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>

  );
}

export default Slider;



// var slides = document.querySelectorAll('.slide');
//     var btns = document.querySelectorAll('.btn');
//     let currentSlide = 1;

//     // Javascript for image slider manual navigation
//     var manualNav = function(manual){
//       slides.forEach((slide) => {
//         slide.classList.remove('active');

//         btns.forEach((btn) => {
//           btn.classList.remove('active');
//         });
//       });

//       slides[manual].classList.add('active');
//       btns[manual].classList.add('active');
//     }

//     btns.forEach((btn, i) => {
//       btn.addEventListener("click", () => {
//         manualNav(i);
//         currentSlide = i;
//       });
//     });
// 
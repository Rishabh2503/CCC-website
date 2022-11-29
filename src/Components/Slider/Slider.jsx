import React from "react";
import "../Slider/Slider.css"
const Slider =() => {
    return (
        <>
        <div className ="Slider-body">
        <div className="slideImage">
      <div className="slide active">
        <img src=""alt="" />
        <div className="slider-info">
          <div className="slider-sec">
          <h2>Heading</h2>
          <p>Lorem ipsum dolor sit amet, conslider-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
      </div>
      <div className="slide">
        <img src="" alt="" />
        <div className="slider-info">
          <h2>Heading</h2>
          <p>Lorem ipsum dolor sit amet, conslider-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      </div>
      <div className="slide">
        <img src="" alt="" />
        <div className="slider-info">
          <div className="slider-sec1">
          <h2>Heading</h2>
          <p>Lorem ipsum dolor sit amet, conslider-sectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      </div>
      <div className="slider-navigation">
        <div className="btn1 active" onclick="control(0)"></div>
        <div className="btn1" onclick="control(1)"></div>
        <div className="btn1" onclick="control(2)"></div>
      </div>
    </div>
    </div>
        </>
    )
}
let slide = document.getElementsByClassName("slide");
let btn1 = document.getElementsByClassName("slider-navigation");
let dots=document.getElementsByClassName("btn1");
let total_slide = slide.length;
let i,index=0;
setInterval(function(){
    index+=1;
    control(index);
},4000);

function control(a){
    if(a>total_slide-1){
    index=0;
}
   if(a<0){
    index=total_slide-1;
}
if(a<total_slide && a>=0){
  index=a;
}
for(i=0;i<total_slide;i++){
    slide[i].classNameList.remove("active");
    dots[i].classNameList.remove("active");
}
slide[index].classNameList.add("active");
dots[index].classNameList.add("active");
}

export default Slider;
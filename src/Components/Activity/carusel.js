import React, { useState } from "react";
import "./carusel.css";
// import image1 from './images/1.jpg'
// import image2 from './images/2.jpg'
// import image3 from './images/3.jpg'
import image4 from "../Activity/actvity images/4.jpeg";
import image5 from "../Activity/actvity images/5.jpeg";
import image6 from "../Activity/actvity images/6.jpeg";
import image7 from "../Activity/actvity images/7.jpeg";
import image8 from "../Activity/actvity images/8.jpeg";
import image9 from "../Activity/actvity images/9.jpeg";
import Slider from "./Slider";

import { Link } from "react-router-dom";

const Carusel = () => {
  const [i, seti] = useState(0);
  const [j, setj] = useState(1);
  const [k, setk] = useState(2);
  const Slidedata = [
    // {
    //   imgsrc:image1,
    //   content:"test1"
    // },
    // {
    //     imgsrc:image2,
    //     content:"test2"
    // },
    // {
    //     imgsrc:image3,
    //     content:"test3"
    //   },
    {
      imgsrc: image4,
      content: <>Quizard</>,
    },
    {
      imgsrc: image5,
      content:( <>A Recruitment Drive</> ),

      path: "/new",
    },
    {
      imgsrc: image6,
      content: (
        <>
          Workshop on Cloud
          <br />
          Essential & Linux
        </>
      ),
      path: "/new3",
    },
    {
      imgsrc: image7,
      content: (
        <>
          Workshop on Amazon
          <br />
          Web Services with Alexa
        </>
      ),
      path: "/new4",
    },
    {
      imgsrc: image8,
      content: <>Workshop on Erudition</>,
    },
    {
      imgsrc: image9,
      content:( <>Workshop on CloudSplore</> ),
      path: "/new6",
    },
    // {
    //   imgsrc:image10,

    // // },
  ];

  const prev = () => {
    if (i === 0) seti(Slidedata.length - 1);
    else seti(i - 1);

    if (j === 0) setj(Slidedata.length - 1);
    else setj(j - 1);

    if (k === 0) setk(Slidedata.length - 1);
    else setk(k - 1);
  };

  const next = () => {
    if (i === Slidedata.length - 1) seti(0);
    else seti(i + 1);

    if (j === Slidedata.length - 1) setj(0);
    else setj(j + 1);

    if (k === Slidedata.length - 1) setk(0);
    else setk(k + 1);
  };
  //   let slide = document.getElementsByClassName("slide");
  //   let btn = document.getElementsByClassName("navigation");
  //   let dots=document.getElementsByClassName("btn");
  //   let total_slide = slide.length;
  //   let index=0;
  //   setInterval(function(){
  //       index+=1;
  //       control(index);
  //   },4000);

  //   function control(a){
  //       if(a>total_slide-1){
  //       index=0;
  //   }
  //      if(a<0){
  //       index=total_slide-1;
  //   }
  //   if(a<total_slide && a>=0){
  //     index=a;
  //   }
  //   for(let z=0;z<total_slide;z++){
  //       slide[z].classList.remove("active");
  //       dots[z].classList.remove("active");
  //   }
  //   slide[index].classList.add("active");
  //   dots[index].classList.add("active");
  // }
  console.log(Slidedata);
  return (
    <div>
      <section className="carusel reveal">
       <div className="d-card-title"> 
        <p> OUR WORKS</p>
        {/* <h3>What we do!</h3> */}
 </div>
        <div className="slider">
          <button className="btn1" onClick={prev}>
            {/* <div className="bt1">
                  <p> Prev</p>
                </div> */}
          </button>

          <div className="slider1">
            <img src={Slidedata[i].imgsrc} alt="img" />
            <div className="ss1">{Slidedata[i].content}</div>
          </div>

          <div className="slider2">
            <Link to={Slidedata[j].path}>
              <img src={Slidedata[j].imgsrc} alt="img" />
            </Link>
            <div className="ssContent">{Slidedata[j].content}</div>
          </div>

          <div className="slider3">
            <img src={Slidedata[k].imgsrc} alt="img" />
            <div className="ss2">{Slidedata[k].content}</div>
          </div>

          <button className="btn2" onClick={next}></button>
        </div>
      </section>
      {/* <br/>
        <div className="slideImage">
        <div className="slide active">
          <img src="3.jpg"alt=""/>
          <div className="info">
            <div className="sec">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          </div>
        </div>
        <div className="slide">
          <img src="1.jpg" alt=""/>
          <div className="info">
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
        <div clasName="slide">
          <img src="2.jpg" alt=""/>
          <div className="info">
            <div className="sec1">p
            <h2>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        </div>
        <div className="navigation">
          <div className="btn active" onClick={control(0)}></div>
          <div className="btn" onClick={control(1)}></div>
          <div className="btn" onClick={control(2)}></div>
        </div>
      </div> 
      </div>
              */}

      {/* <div className="container">
   <div className="box">
       <img src={image10} alt=""/>
   </div>
   </div> */}
      <Slider />
    </div>
  );
};
export default Carusel;

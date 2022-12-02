import React, { useState } from "react";
import web from "../src/image/6.png";
import Tableb from "./Components/Table/Tableb"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Manya from "./image/society/Manya Chaudhary ML and uiux.jpeg";
import Aagiya from "./image/society/Aagiya Singh web d.jpeg";
import Anishkha from "./image/society/Anishkha chaudhary app d and uiux.jpeg";
import Anjani from "./image/society/Anjani Singhal app and uiux.jpeg";
import Kamakshi from "./image/society/Kamakshi Vashista front end.jpeg";
import Mrityunjay from "./image/society/Mrityunjay Pandey Web d and CP.jpeg";
import Nidhi from "./image/society/Nidhi solanki ML.jpeg";
import Sachin from "./image/society/Sachin kumar web d.jpeg";
import Samiksha from "./image/society/Samiksha jain front end.jpeg";
import Shashwat from "./image/society/Shashwat.jpeg";
import Siddharth from "./image/society/Siddharth Srivastava ML.jpeg";
import Nishtha from "./image/society/Nishtha Pandey ML.jpeg";
import Kartikay from "./image/society/Kartikay Singhal ML.jpeg";
import Harshit from "./image/society/Harshit.jpeg";
import Shailaja from "./image/society/Shailaja Pal.jpeg";
import CardData from "../src/Components/Card/cardData";
import Tanish from "./image/society/tanish.jpg";
import jigyansh from "./image/society/Jigyansh-4.jpeg"
import Unknow1 from "./image/society/IMG-20221127-WA0024.jpg"
import Unknow2 from "./image/society/IMG-20221127-WA0023.jpg"
import Unknow3 from "./image/society/IMG-20221127-WA0025.jpg"
import varsha from "./image/society/varsha-4.jpeg"
import Shatakshi from "./image/society/Shatakshi-4.jpg"
import Saksham from "./image/society/Saksham-4.jpg"
import PRASEN from "./image/society/PRASEN JEET-4.jpg"
import Shashank from "./image/society/sashank.JPG"
import Priya from "./image/society/priya.jpg"
import Taru from "./image/society/taru.jpg"
import Sarthak from "./image/society/sarthak.jpg"
import Atul from "./image/society/atul.jpg"
import Dev from "./image/society/Devrath.jpg"
import Sonam from "./image/society/sonam.jpg"
import Preeti from "./image/society/preeti.jpg"
import Rishabh from "./image/society/Rishabh4.jpeg"
import Kartik from "./image/society/Kartik.jpeg"
import Saurbh from "./image/society/Saurbh.jpg"
import Arpit from "./image/society/Arpit.jpeg"
import Shruti from "./image/society/Shruti.jpeg"
import Raghav from './image/society/Raghav.jpg'
const Team = () => {
  const [tabIndex, setTabIndex] = useState(1);
  {
    return (
      <>
        <Navbar />
        <section id="header" className="d-flex algin-items-center ">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" id="hello6">
                  <h2 className="blast-text4">
                <span className="text3">The Cloud Computing Cell is more than just a scientific community,</span>
                <br />
                <span className="text9">It is a Family.</span>
</h2>
                  </div>
                  <div className="col-lg-6 order-lg-2 header-img">
                    <img
                      src={web}
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ourteam reveal">
          <div className="col-md-12">
            <div className="section1-title text-container">
              <h1 className="d-card-title">Our Team</h1>
            </div>
          </div>
          <div className="mt-3 team-bt">
            <button className="btn-get-started" onClick={() => setTabIndex(1)}>
              4<sup>nd</sup> Year
            </button>
            <button className="btn-get-started" onClick={() => setTabIndex(2)}>
              3<sup>nd</sup> Year
            </button>
            <button className="btn-get-started" onClick={() => setTabIndex(3)}>
              2<sup>nd</sup> Year
            </button>
          </div>
          {tabIndex === 1 && (
            <div className="team1-area reveal">
              <div className="team-container">
                <div className="row" id="fourth-year">
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Manya} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Manya Chaudhary</h3>
                          <p>Machine Learning & UI/Ux</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/m.a.n.y.aa_/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2nd member */}
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Kartikay} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Kartikay Singhal </h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/kartikay_singhal/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Unknow2} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Aagiya Singh</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/_.aagiyasingh/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Samiksha} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Samiksha Jain</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/samiksha7302/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd row */}
                <br />
                <br />
                <div className="row" id="fourth-year">
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Unknow1} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Manya Chaudhary</h3>
                          <p>Machine Learning & UI/Ux</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/m.a.n.y.aa_/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2nd member */}
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Shatakshi} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Kartikay Singhal </h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/kartikay_singhal/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Saksham} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Aagiya Singh</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/_.aagiyasingh/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={PRASEN} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Samiksha Jain</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/samiksha7302/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd row */}
                <br />
                <br />
                <div className="row" id="fourth-year3">
                <div className="col-md-6">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Unknow3} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3></h3>
                        <p>App Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/mr_x0209/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd member */}
                <div className="col-md-6">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={jigyansh} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>jigyansh</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/_sarthak_srivastav._/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                
                
              </div>
                
              </div>
            </div>
          )}
          {/*------------------------------------------------ 
          #3rd year
          -------------------------------------------------------- */}
          {tabIndex === 2 && (
            <div className="team1-area reveal">
            <div className="team-container">
              <div className="row" id="fourth-year">
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Sachin} alt=""/>
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Sachin Kumar</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/_sachinkrr/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                {/* 2nd member */}
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Mrityunjay} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Mrityunjay Pandey</h3>
                          <p>Web Developer & CP</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/_.m.n.p._/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Kamakshi} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Kamakshi Vashista</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/kamakshivashista/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Harshit} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Harshit Saxena</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/harshit_saxena_1107/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              {/* 2nd row */}
              <br />
              <br />
              <div className="row" id="fourth-year">
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Shashwat} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Shashwat Pandey</h3>
                          <p>Web Developer & CP</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/shashwat144/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                
                {/* 2nd member */}
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Anishkha} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Anishkha Chaudhary</h3>
                          <p>App Developer & Ui/Ux</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Tanish} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Tanishq Agarwal</h3>
                          <p>App Developer</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/_ishq_tan_/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Anjani} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Anjani Singhal</h3>
                          <p>App Developer & Ui/Ux</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/singhal_anjani/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              {/* 3rd row */}
              <br />
              <br />
              <div className="row" id="fourth-year">
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Nishtha} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Nishtha Pandey</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                {/* 2nd member */}
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Shailaja} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Shailaja Pal</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/shailaja_ayra/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Nidhi} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Nidhi Solanki</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/nidhi_26_s/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                      <div className="team1-img">
                        <img src={Siddharth} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Siddharth Srivastava</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          
                          <a href="https://www.instagram.com/siddharth_0826/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
          )}

          {tabIndex === 3 && (
            <div className="team1-area reveal">
            <div className="team-container">
              <div className="row" id="fourth-year">
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Shashank} alt=""/>
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Shashank Singh </h3>
                        <p>App Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/shashanksingh.7/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd member */}
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Rishabh} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Rishabh Gupta</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/i_am_rishabh25/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Dev} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Dev Brat Tripathi</h3>
                        <p>Machine Learning </p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/dev_vrat_tripathi/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dev-brat-t-ba2647108/"><i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i></a>
                        <a href="https://github.com/Desi-Saitama"><i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i></a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Atul} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Atul Kumar</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/atul_kumar_0933/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd row */}
              <br />
              <br />
              <div className="row" id="fourth-year">
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Priya} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Priya Sharma</h3>
                        <p>Web Developer & Ui/Ux Desgin</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/priyasharanam/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 2nd member */}
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Taru} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Taru Pathak</h3>
                        <p>Web Developer & Ui/Ux Desgin</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Preeti} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Anjani Singhal</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/singhal_anjani/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Sonam} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Sonam Kumari</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/sonam2257kumari/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd row */}
              <br />
              <br />
              <div className="row" id="fourth-year">
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Kartik} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Kartik Tyagi</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/kartik_tyagi_2912/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd member */}
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Sarthak} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Sarthak Srivastava </h3>
                        <p>Web Developer </p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/_sarthak_srivastav._/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Saurbh} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Saurabh</h3>
                        <p>Web Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/saurabhrajput8280/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Arpit} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Arpit Malik</h3>
                        <p>Machine Learning</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/arp_112358/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arpit-malik-aa836a243">
                          <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>  </a>
                        <a href="https://github.com/Arpit2221">
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>  </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br /><br />
            
              <div className="row" id="fourth-year3">
                <div className="col-md-6">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Raghav} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Raghav Aggarwal</h3>
                        <p>App Developer</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/mr_x0209/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd member */}
                <div className="col-md-6">
                <div className="single1-team">
                    <div className="team1-img">
                      <img src={Shruti} alt="" width={255} height={263} />
                    </div>
                    <div className="team1-content">
                      <div className="team1-info">
                        <h3>Shrasti yadav</h3>
                        <p>Web Developer & Ui/Ux Desgin</p>
                      </div>
                      <p className="team1-text">
                        
                        <a href="https://www.instagram.com/_sarthak_srivastav._/?next=%2F">
                          <i
                            className="fa-brands fa-instagram fa-2x "
                            id="iconanimate"
                          ></i>
                        </a>
                        <i
                          className="fa-brands fa-linkedin fa-2x "
                          id="iconanimate"
                        ></i>
                        <i
                          className="fa-brands fa-github fa-2x "
                          id="iconanimate"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                
                
              </div>
           
              
            </div>
          </div>
          )}
        </section>
        {/* <section className="Aluminiarea2 reveal">
          <h1 className="d-card-title"> ALUMNI</h1>
          <div className="row--img">{CardData}</div>
        </section> */}
        
        {/*======================================  ======================================   ====================================== */}
        <section>
          <Tableb />
        </section>
        {/*======================================  ======================================   ====================================== */}
         {/*======================================  ======================================   ====================================== */}
         <section>
          <Footer />
        </section>
        {/*======================================  ======================================   ====================================== */}
       
      </>
    );
  }
};
export default Team;

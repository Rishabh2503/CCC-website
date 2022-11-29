import React from "react";
import web from "../src/image/7.png";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex algin-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="contain">
                    <h1>
    
                      <span className="text first-text">If You Ever Wish For a Cloud
                      </span>
                    </h1>
                    <h2 className="my-3">
                      <span className="text sec-text">Here We Are.</span>
                    </h2>
                  </div>
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
      <section className="reveal">
      <div className="d-card-title"><h1>Contact Us</h1></div><br/>
 
 <div className="contact-panel1">
       <div className="contact-map"> 
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d437.5590053994981!2d77.50311552543072!3d28.67552288784848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzMyLjQiTiA3N8KwMzAnMTEuNyJF!5e0!3m2!1sen!2sin!4v1667474400173!5m2!1sen!2sin"
                width="300"
                height="300"
                title="maps"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" 
              ></iframe>
     </div>  
    <form onSubmit="sendEmail(); reset(); return false" id="form">
        <div className="contact-form-control">
            <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="contact-form-control">
            <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="contact-form-control">
            <input type="number" id="phone" placeholder="Your Contact No." />
        </div>
        
        <div className="contact-form-control">
            <select name="role" id="role">
                <option value="student">
                    Student
                </option>
                <option value="intern">
                    Faculty
                </option>
                <option value="others">
                    Others
                </option>
            </select>
        </div>

        <div className="contact-form-control">
            <textarea id="message" name="comment" placeholder="Your feedback!" rows="7" cols="50"></textarea>
        </div>
        <button className="contact-bt" type="submit" value="submit">
            SEND
        </button>
    </form>
    </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};
export default Contact;

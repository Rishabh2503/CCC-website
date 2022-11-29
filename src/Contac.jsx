import React, { useState } from "react";
import web from "../src/image/7.png";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {db} from './firebase'
import {setDoc,collection} from './firebase/firestore'



import "../src/call.css";
const Contac = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };


  const contact=async()=>{
    await setDoc(collection(db,"people"),{
        firstName:user.firstname,
        lastname:user.lastname,
        email:user.email,
        phone: user.phone,
        message : user.message
    })
    }
    


  const postData = async (e) => {
    e.preventDefault();
    const {firstname,lastname,email,phone,message} = user;

    if(firstname && lastname && email && phone && message){
      const res = await fetch(
         "https://contactform-dd833-default-rtdb.firebaseio.com/Contactform.json",
         { method: "POST", headers :{
            "Content-Type":"application.json",
            body : JSON.stringify({
               firstname,
               lastname,
               email,
               phone,
               message,
   
            })
         }, }
       );
       if(res){
         setUser({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
          });
          alert("Thank You For submiting");
       }
    }
    else{
      alert("Fill all data");
    }
    
  };
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex algin-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="blast-text3">
                <span className="text3">Let's</span>
                &nbsp;
                <span className="text3">Keep</span>
                &nbsp;
                <span className="text3">In</span>
                &nbsp;
                <span className="text3">Touch</span>
              </h1>
                  
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
      <section>
        <div className="container3 reveal">
          <div className="contact-text">Contact us</div>
          <form
            id="form"
            method="POST"
          >
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  required
                  id="fname"
                  name="firstname"
                  value={user.firstname}
                  onChange={getUserData}
                  autoComplete="off"
                />
                <div className="underline"></div>
                <label>First Name</label>
              </div>
              <div className="input-data">
                <input
                  type="text"
                  required
                  id="lname"
                  name="lastname"
                  value={user.lastname}
                  onChange={getUserData}
                />
                <div className="underline"></div>
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  required
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={getUserData}
                />
                <div className="underline"></div>
                <label>Email Address</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input
                  type="text"
                  required
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={getUserData}
                />
                <div className="underline"></div>
                <label>Phone Number</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea
                  rows="8"
                  cols="80"
                  required
                  id="message"
                  name="message"
                  placeholder="Your message here.."
                  value={user.message}
                  onChange={getUserData}
                ></textarea>
                <br />
                <div className="underline"></div>
                <label>Write your message</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit" value="submit"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};
export default Contac;

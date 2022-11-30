import React from "react";
import web from "../src/image/7.png";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useState } from 'react'
import axios from 'axios'
import "../src/call.css";
const Contac = () => {
  const [userlastnamea,setlastnamea]=useState("")
  function setTheUserlastnamea(e){
    setlastnamea(e.target.value)
  }
  const [userfirstnamea,setfirstnamea]=useState("")

  const [useremaila,setemaila]=useState("")

  const [userphonea,setphonea]=useState("")

  const [usermessagea,setmessagea]=useState("")

  var data={firstname:userfirstnamea,lastname:userlastnamea,email:useremaila,phonenumber:userphonea,message:usermessagea}

  function SendData(event){
    console.log(data)
    event.preventDefault()
    setfirstnamea("")
    setlastnamea("")
    setemaila("")
    setphonea("")
    setmessagea("")
   axios.post('https://contact-production.up.railway.app/contactus',data).then((res)=>{
    console.log(res);
    console.log("hellloo")
   }).catch(e => {
    console.log(e);
});
  }





  
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex algin-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" id="contacb">
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
                  value={userfirstnamea}
                  onChange={(e)=>{setfirstnamea(e.target.value)}}
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
                  value={userlastnamea}
                  onChange={(e)=>{setlastnamea(e.target.value)}}
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
                  value={useremaila}
                  onChange={(e)=>{setemaila(e.target.value)}}
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
                  value={userphonea}
                  onChange={(e)=>{setphonea(e.target.value)}}
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
                  value={usermessagea}
                  onChange={(e)=>{setmessagea(e.target.value)}}
                ></textarea>
                <br />
                <div className="underline"></div>
                <label>Write your message</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit" onClick={SendData} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section id="contac-footer">
        <Footer />
      </section>
    </>
  );
};
export default Contac;

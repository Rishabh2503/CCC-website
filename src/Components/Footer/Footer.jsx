import React from "react";
import "../Footer/Footer.css";
// import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Akgec from './9.png'
export default function Footer() {
  const linksList = [
    {
      heading: "Quick Links",
      links: [
        {
          title: "Counselling Centre",
          href: "http://www.counsellingcentre.iitkgp.ac.in/",
          target: "_blank",
        },
        {
          title: "IIT KGP Website",
          href: "http://www.iitkgp.ac.in/",
          target: "_blank",
        },
        {
          title: "Yellow Pages",
          href: "https://wiki.metakgp.org/w/Yellow_pages",
          target: "_blank",
        },
        {
          title: "Hall Management Centre",
          href: "http://www.hmc.iitkgp.ac.in/web/",
          target: "_blank",
        },
      ],
    },
    {
      heading: "Quick Links",
      links: [
        {
          title: "ERP",
          href: "https://erp.iitkgp.ac.in/SSOAdministration/login.htm?sessionToken=F90F79C925A0FE0DC48AE7CBFDE3D20A.worker1&requestedUrl=https://erp.iitkgp.ac.in/IIT_ERP3/",
          target: "_blank",
          
        },
        {
          title: "Your Dost",
          href: "https://wiki.metakgp.org/w/Yellow_pages/",
          target: "_blank",
        },
        {
          title: "Grievance Form",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform",
          target: "_blank",
        },
        {
          title: "Admin Login",
          href: "/login",
          target: "_self",
        }
      ],
    },
  ];
  return (
    <footer>
      <div className="footerContainer">
        <div className="tsgContainer">
          <div className="imgContainer">
            <img src={Akgec} alt="Akgec Logo" />
          </div>
          <div className="tsgDescription">
            <h2 className="tsgHeading">Cloud Computing Cell</h2>
            <p className="address">
              Ajay Kumar Garg Engineering College,
              <br />
              Uttar Pradesh - 201009
            </p>
          </div>
          <div className="iconsContainer">
            <a
              target="_blank"
              href="https://www.facebook.com/ccc.akgec/"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/tsg-iitkgp"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://in.linkedin.com/company/cloud-computing-cell-akgec"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ccc_akgec/"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="linksContainer">
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d437.5590053994981!2d77.50311552543072!3d28.67552288784848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzMyLjQiTiA3N8KwMzAnMTEuNyJF!5e0!3m2!1sen!2sin!4v1667474400173!5m2!1sen!2sin"
                // width="300"
                // height="300"
                title="maps"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
        </div>
        {/* <p className="linksContainerp">© Cloud Computing Cell AKGEC</p> */}
        <div className="contactSection">
          <span>We're here</span>
          <span>Let's talk</span>
          <a href="/ContactUs">
            <button className="contactButton">Get in Touch</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

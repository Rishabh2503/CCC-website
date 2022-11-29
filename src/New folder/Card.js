import React from 'react'
import './Card.css';
// import image12 from './images/12.jpg'
const Card= (props) => {
  console.log(props);
  return (
//    <div className='row'>
         <div className="card">
            <img src={props.src}alt=""/>
            <div className="content box1">
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                <ul>

                    <li><a href={props.insta}><i className="fab fa-instagram"></i></a></li>
                    <li><a href={props.linkedIn}><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>

             

       
  )
}

export default Card;
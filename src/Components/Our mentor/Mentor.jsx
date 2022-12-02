import React from 'react'
import comma from './comma.png'
import comma2 from './comma - Copy.png'
import sir from './sir1.jpeg'
import "../Our mentor/mentor.css"
export default function Mentor() {
  return (
    <div className='reveal'>
        <div className='mentorc1'><img src={comma} alt="" /></div>
        <div className='mentorc2'><img src={comma2} alt="" /></div>
        <div className='mentorc3'><h1>Our Faculty</h1></div>
        <div className='mentor-img'>
          <img src={sir} alt="" />
          <p className='mentorimpp2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className='mentor-imgp'><h5>Mr.Santosh&nbsp;</h5><h5>Mishra</h5></div>
          {/* <div className='mentor-imgp2 '><p>Assistant Professor 
It depart</p></div> */}
        </div>
        
    </div>
  )
}

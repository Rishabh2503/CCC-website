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
          <p className='mentorimpp2'>Santosh Mishra, Assistant Professor in IT department. having 15 years of teaching and 3 years of industry experience as Java software developer.Gold faculty partner of Infosys. Awarded with content guru award. Was mentor of Hackathon winning team of 2019. Programming knowledge of Java, C, C++, Python and PHP.Area of my research are different meta- heuristics Optimization algorithms like PSO, MFO, GSA, GA etc.</p>
          <div className='mentor-imgp'><h5>Mr.Santosh&nbsp;</h5><h5>Mishra</h5></div>
          {/* <div className='mentor-imgp2 '><p>Assistant Professor 
It depart</p></div> */}
        </div>
        
    </div>
  )
}

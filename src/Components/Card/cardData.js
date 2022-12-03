import photo1 from './12.jpeg'
import photo2 from './s5.png'
import photo3 from './s6.png'
import photo4 from './s7.jpg'
import photo5 from './s8.jpg'
import photo6 from './harsh.jpg'
import photo7 from './lavish.jpg'
import photo8 from './meenakshi.jpg'
import photo9 from './money.jpg'
import photo10 from './abhishek.jpg'
import photo11 from './pratik.jpg'
import photo12 from './rahul.jpg'
import photo13 from './shivam.jpg'
import photo14 from './shrey.jpg'
import photo15 from './shreya.jpg'
import photo16 from './abhishek1.jpg'
import photo17 from './ayush.jpg'
import photo18 from './akshit.jpg'
import Card from './Card'    
import React from 'react'



const cardArray = [
    {
        
        src:photo1,github: "https://github.com/iamprashant12", linkedIn: "https://www.linkedin.com/in/prashant-shishodia-663a2b157/", name: 'PRASHANT', about:'Flutter Developer'
    },
    {
        src:photo2,github: "https://github.com/ryansmith37", linkedIn: "https://www.linkedin.com/in/satyam-goyal/", name: 'SATYAM', about:'Flutter Developer'
    },
    {
        src:photo3,github: "https://github.com/shivangi2701", linkedIn: "", name: 'SHIVANGI', about:'Web Developer'
    },
    {
        src:photo4,github: "https://github.com/kumarvivekgupta", linkedIn: "https://www.linkedin.com/in/vivek-kumar-gupta-589946154/", name: 'VIVEK ', about:'Web Developer'
    },
    {
        src:photo5,github: "https://github.com/ashna197", linkedIn: "https://www.linkedin.com/in/ashna-arora/", name: 'ASHNA', about:'Web Developer'
    },
    {
        src:photo6,github: "https://github.com/harshguptahg007", linkedIn:  "https://www.linkedin.com/in/harsh-gupta-4695b612a/", name: 'HARSH' , about:'Full Stack Developer'
    },
    {
        src:photo7,github: "https://github.com/Lavish27", linkedIn: "https://www.linkedin.com/in/lavish-jain-2703/", name:'LAVISH' , about:'Application Development'
    },
    {
        src:photo8,github: "https://github.com/meenakshi-ojha", linkedIn: '#', name:'MEENAKSHI' , about:'Web Developer'
    },
    {
        src:photo9,github: '#', linkedIn: "https://www.linkedin.com/in/moneychaudhary/", name:'MONEY' , about:'Android App Development '
    },
    {
        src:photo10,github: "https://github.com/abhish311", linkedIn: "", name:'ABHISHEK', about:'Web Developer'
    },
    {
        src:photo11,github: "https://github.com/pratik-68", linkedIn: "https://www.linkedin.com/in/pratik-agarwal-0a034a12b/", name: 'PRATIK', about:'Reactjs'
    },
    {
        src:photo12,github: "https://github.com/rahulmittal312", linkedIn: "https://www.linkedin.com/in/mittal312/", name: 'RAHUL', about:'Machine Learning'
    },
    {
        src:photo13,github: "https://github.com/shivamdhama", linkedIn: "https://www.linkedin.com/in/dhamashivam95/", name: 'SHIVAM', about:'Nodejs&Blockchain'
    },
    {
        src:photo14,github: "https://github.com/ShreyTripathi", linkedIn: "https://www.linkedin.com/in/shrey-tripathi-214568137/", name: 'SHREY', about:'Android Development'
    },
    {
        src:photo15,github: "https://github.com/Shreya7491", linkedIn: "", name: 'SHERYA', about:'Web Developer'
    },
    {
        src:photo16,github: "https://github.com/abhiymailknp", linkedIn:  "https://www.linkedin.com/in/abhishek-gupta-437479118/", name: 'ABHISHEK', about:'Web Developer'
    },
    {
        src:photo17,github:"https://github.com/arya-ayush" , linkedIn:  "https://www.linkedin.com/in/arya-ayush/", name: 'AYUSH', about:'App Developer'
    },
    {
        src:photo18,github: "https://github.com/akshitj999", linkedIn:  "https://www.linkedin.com/in/akshit-jain-5567b1147/", name: 'AKSHIT', about:'App Developer'
    }
    
    ];



const addingDataToCard =(data)=>{
        // return(<Card name={data.name} src ={data.src} github = {data.github} linkedIn = {data.linkedIn} about = {data.about}/>);
        return(<div>
            <Card name={data.name} src ={data.src} github = {data.github} linkedIn = {data.linkedIn} about = {data.about}/>
        </div>);
    
}


const CardData = cardArray.map(addingDataToCard);


export default CardData

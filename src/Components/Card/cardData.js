import photo1 from './12.jpeg'
import photo2 from './s5.png'
import photo3 from './s6.png'
import photo4 from './s7.jpg'
import photo5 from './s8.jpg'
import Card from './Card'
import React from 'react'


const cardArray = [
    {
        
        src:photo1,insta: "https://instagram.com/prashant_shishodia_?igshid=YmMyMTA2M2Y", linkedIn: "https://www.linkedin.com/in/prashant-shishodia-663a2b157/", name: 'PRASHANT', about:'Flutter Developer'
    },
    {
        src:photo1,insta: "https://instagram.com/prashant_shishodia_?igshid=YmMyMTA2M2Y", linkedIn: "https://www.linkedin.com/in/prashant-shishodia-663a2b157/", name: 'PRASHANT', about:'Flutter Developer'
    },
    {
        src:photo2,insta: '', linkedIn: "https://www.linkedin.com/in/satyam-goyal/", name: 'SATYAM', about:'Web Developer'
    },
    {
        src:photo2,insta: '#', linkedIn: "https://www.linkedin.com/in/satyam-goyal/", name: 'SATYAM', about:'Web Developer'
    },
    {
        src:photo2,insta: '#', linkedIn: "https://www.linkedin.com/in/satyam-goyal/", name: 'SATYAM', about:'Web Developer'
    },
    {
        src:photo2,insta: '#', linkedIn:  "https://www.linkedin.com/in/satyam-goyal/", name: 'SATYAM' , about:'Web Developer'
    },
    {
        src:photo3,insta: '#', linkedIn: '#', name:'SHIVANGI' , about:'Web Developer'
    },
    {
        src:photo3,insta: '#', linkedIn: '#', name:'SHIVANGI' , about:'Web Developer'
    },
    {
        src:photo3,insta: '#', linkedIn: '#', name:'SHIVANGI' , about:'Web Developer'
    },
    {
        src:photo3,insta: '#', linkedIn: '#', name:'SHIVANGI', about:'Web Developer'
    },
    {
        src:photo4,insta: '#', linkedIn: "https://www.linkedin.com/in/vivek-kumar-gupta-589946154/", name: 'VIVEK', about:'Web Developer'
    },
    {
        src:photo4,insta: '#', linkedIn: "https://www.linkedin.com/in/vivek-kumar-gupta-589946154/", name: 'VIVEK', about:'Web Developer'
    },
    {
        src:photo4,insta: '#', linkedIn: "https://www.linkedin.com/in/vivek-kumar-gupta-589946154/", name: 'VIVEK', about:'Web Developer'
    },
    {
        src:photo4,insta: '#', linkedIn: "https://www.linkedin.com/in/vivek-kumar-gupta-589946154/", name: 'VIVEK', about:'Web Developer'
    },
    {
        src:photo5,insta: '#', linkedIn: "https://www.linkedin.com/in/ashna-arora/", name: 'ASHNA', about:'Web Developer'
    },
    {
        src:photo5,insta: '#', linkedIn:  "https://www.linkedin.com/in/ashna-arora/", name: 'ASHNA', about:'Web Developer'
    },
    {
        src:photo5,insta: '#', linkedIn:  "https://www.linkedin.com/in/ashna-arora/", name: 'ASHNA', about:'Web Developer'
    },
    {
        src:photo5,insta: '#', linkedIn:  "https://www.linkedin.com/in/ashna-arora/", name: 'ASHNA', about:'Web Developer'
    }
    
    ];



const addingDataToCard =(data)=>{
        // return(<Card name={data.name} src ={data.src} insta = {data.insta} linkedIn = {data.linkedIn} about = {data.about}/>);
        return(<div>
            <Card name={data.name} src ={data.src} insta = {data.insta} linkedIn = {data.linkedIn} about = {data.about}/>
        </div>);
    
}


const CardData = cardArray.map(addingDataToCard);


export default CardData

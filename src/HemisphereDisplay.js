import React from 'react';
import './Hemisphere.css';
import northernPic from './image/northern hemisphere.jpg';
import southernPic from './image/southern hemisphere.jpg';

const HemisphereConfig = {
    southern:{
        text:'this is southern hemisphere',
        picture:southernPic
    },
    northern:{
        text: 'this is northern hemisphere',
        picture: northernPic
    }
}

const HemisphereDisplay = ({latitude})=>{
    const hemisphere = latitude > 0 ? 'northern': 'southern'
    const {text,picture} = HemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'><img src = {picture} alt='globe picture'/></div>
                <div className='ui teal bottom attached label'><h1>{text}</h1></div>
            </div>
        </div>
    );
};

export default HemisphereDisplay
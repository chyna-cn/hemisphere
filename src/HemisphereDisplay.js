import React from 'react';
import northernPic from './image/northern hemisphere.jpg';
import southernPic from './image/southern hemisphere.jpg';
const HemisphereDisplay = ({latitude})=>{
    const hemisphere = latitude > 0 ? 'northern hemisphere': 'southern hemisphere'
    const picture = latitude > 0 ? 'northernPic' : 'southernPic'
    return(
        <div>
            <img src = {picture} alt='globe'/>
            {hemisphere}
        </div>
    );
};

export default HemisphereDisplay
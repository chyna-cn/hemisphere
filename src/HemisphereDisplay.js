import React from 'react';
const HemisphereDisplay = ({latitude})=>{
    const hemisphere = latitude > 0 ? 'northern hemisphere': 'southern hemisphere'
    return(
        <div> {hemisphere}</div>
    );
};

export default HemisphereDisplay
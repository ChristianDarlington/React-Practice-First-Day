import React from 'react';
import heroImage from '../Image/Meatball.jpeg'




function MainImage(){
  return(
    <div className="image-container">
      <img className="main-image" src={heroImage} />
      <img src={heroImage} />
    </div>
  )
}

export default MainImage


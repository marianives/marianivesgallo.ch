import React from 'react'
import ballet from "../images/balletcolor.png"
import hiphop from "../images/hiphop.jpg"
import gym from "../images/gym.jpg"

const Aboutme = () => {
  return (
    <div className='aboutme'>

      <h1 className='titelaboutme'>About me</h1>

      <div className='hobby'>
        
        <div className='hobbys'>
          <p className='hobbyname'>
            &#8226; Ballet - Seit 14 Jahren
          </p>
          <p className='hobbyname'>
            &#8226;Hip-Hop - Seit 9 Jahren
          </p>
          <p className='hobbyname'>
            &#8226;  Fintess - Seit ein Jahr
          </p>
        </div>

      </div>
      <div className='images'>

        <img src={ballet} alt="ballet" className='bildone'></img>
        <img src={hiphop} alt="hiphop" className='bildtwo'></img>
        <img src={gym} alt="gym" className='bildthree'></img>

      </div>
    </div>
  )
}

export default Aboutme
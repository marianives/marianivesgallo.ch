import React from 'react'
import ballet from "../images/balletcolor.png"
import hiphop from "../images/hiphop.jpg"
import gym from "../images/gym.jpg"

const Aboutme = () => {
  return (
    <div className='aboutme'>
      <h1 className='titel'>About me</h1>
      <div className='hobby'>
        <h2>
          Freizeit:
        </h2>
        <p>
          Ballet - Seit 14 Jahren
        </p>
        <p>
          Hip-Hop - Seit 9 Jahren
        </p>
        <p>
          Fintess - Seit ein Jahr
        </p>
      </div>
      <div>
        <img src={ballet} alt="ballet" className='bildone'></img>
        <img src={hiphop} alt="hiphop" className='bildtwo'></img>
        <img src={gym} alt="gyn" className='bildthree'></img>
      </div>
    </div>
  )
}

export default Aboutme
import React from 'react'
import background from "../images/backgroundaboutme.png"


const Aboutme = () => {
  return (
    <div className='aboutme' >
      <h1 className='titelaboutme'>About me</h1>
      <div className='hobby'>
        <div className='hobbys'>
          <p className='hobbyname'>
            Ballet - Seit 14 Jahren
          </p>
          <p className='hobbynamehh'>
            HipHop - Seit 9 Jahren
          </p>
          <p className='hobbyname'>
            Fitness - Seit einem Jahr
          </p>
        </div>
      </div>
      <div className='images'>
        <img src={background} alt="hobbys" className='bildone'></img>
      </div>
    </div>
  )
}
export default Aboutme
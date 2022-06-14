import React from 'react'
import BoxSprachen from './BoxSprachen'
import BoxProjects from './BoxProjects'




const Skills = () => {
  return (
    <div className='skillsprojects'>
      <h1 className='titelSP'>Skills and Projects</h1>
      <div className='boxes'>
        <div className='boxsprachen'>
          <BoxSprachen></BoxSprachen>
        </div>
        <div className='boxprojects'>
          <BoxProjects></BoxProjects>
        </div>
      </div>


    </div>
  )
}

export default Skills
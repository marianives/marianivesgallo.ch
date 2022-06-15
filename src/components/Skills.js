import React from 'react'
import BoxProjects from './BoxProjects'


const Skills = () => {
  return (
    <div className='skillsprojects'>
      <h1 className='titelSP'>Skills and Projects</h1>
      <div className='boxes'>
        <div className='boxsprachen'>
          <p className='titlesprachenn'>Skills</p>
          <p className='sprachen'>Java</p>
          <p className='sprachen'>HTML / CSS</p>
          <p className='sprachen'>C# / Windows Forms</p>
          <p className='sprachen'>Linux</p>
          <p className='sprachen'>MySQL / Datenbanken entwerfen</p>
          <p className='sprachen'>Arduino</p>
          <p className='sprachen'>Microsoft Office</p>
          <p className='sprachen'>React.js</p>
          <p className='sprachen'>Algorithmen entwerfen</p>
        </div>
        <div className='boxprojects'>
          <BoxProjects></BoxProjects>
        </div>
      </div>


    </div>
  )
}

export default Skills
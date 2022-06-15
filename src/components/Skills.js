import React from 'react'
import BoxProjects from './BoxProjects'


const Skills = () => {
  return (
    <div className='skillsprojects'>
      <h1 className='titelSP'>Skills and Projects</h1>
      <div className='boxes'>
        <div className='boxsprachen'>
          <p className='titlesprachenn'>Skills</p>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>Java</p>
          </a>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>HTML / CSS</p>
          </a>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>C# / Windows Forms</p>
          </a>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>Linux</p>
          </a>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>MySQL / Datenbanken</p>
          </a>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>Arduino</p>
          </a>
          <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink'>
            <p className='sprachen'>Microsoft Office</p>
          </a>
          <p className='sprachen'>React.js</p>
          <p className='sprachen'>Algorithmen entwerfen</p>
        </div>
        <div className='boxprojects'>
          <BoxProjects></BoxProjects>
        </div>
      </div>


    </div >
  )
}

export default Skills
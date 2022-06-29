import React from 'react'
import BoxProjects from './BoxProjects'


const Skills = () => {
  return (
    <div className='skillsprojects'>
      <h1 className='titelSkillsprojects'>Skills and Projects</h1>
      <div className='boxes'>
        <div className='boxsprachen'>
          <p className='titlesprachenn'>Skills</p>
            <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>Java</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/bbbaden-rundgang-1' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>HTML / CSS</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/modul-404-auftrag-ka-404-9923-io' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>Windows Forms</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/virtuelle-text-welt' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>C#</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/modul-105-ddl' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>MySQL / Datenbanken</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/arduino-projekt-modul-242' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>Arduino / C++</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/modul-122-swiss-lotto' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>Powershell</p>
            </a>
            <a href='https://portfolio.bbbaden.ch/user/m-gallo-inf20/1306-react-portfolio-website' className='portfoliolink' target="_blank" rel="noreferrer">
              <p className='sprachen'>React.js</p>
            </a>
        </div>
        <div className='boxprojects'>
          <BoxProjects></BoxProjects>
        </div>
      </div >


    </div >
  )
}

export default Skills
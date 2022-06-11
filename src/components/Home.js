import React from 'react'
import maria from "../images/bild.png"


const Home = () => {
    return (
        <div className='home'>
            <img src={maria} alt="Maria-Nives" className='bild '></img>
            <h1 className='mntitle'> Maria-Nives <br /> Gallo</h1>
            <p className='portfolio'>In Ausbildung als <br />
                Informatikerin Applikationsentwicklung   <br />
                Alte Kanti Aarau / BBBaden</p>
        </div>

    )
}

export default Home
import React from 'react'
import maria from "../images/bild.png"


const Home = () => {
    return (
        <div className='home'>
            <div className='div'>
                <h1 className='mntitle'> Maria-Nives <br /> Gallo</h1>
                <p className='portfolio'>
                    Informatikerin Applikationsentwicklung   <br />
                    Alte Kanti Aarau / BBBaden
                </p>
            </div>
            <div className='bilddiv'>
                <img src={maria} alt="Maria-Nives" className='bild '></img>
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import maria from "../images/bild.png"

/*              <p className='portfolio'>
                    Informatikerin Applikationsentwicklung   <br />
                    Alte Kanti Aarau / BBBaden
                </p>
                
*/

const Home = () => {
    return (
        <div className='home'>
            <h1 className='mntitle'> Maria-Nives <br /> Gallo</h1>
            <img src={maria} alt="Maria-Nives" className='bild '></img>
        </div>
    )
}

export default Home
import React from 'react'
import maria from "../images/bild.png"
//            <div className='portfolio'><p >In Ausbildung als <br />
//Informatikerin Applikationsentwicklung   <br />
//Alte Kanti Aarau / BBBaden</p>
//</div>

const Home = () => {
    return (
        <div className='home'>
            <div><img src={maria} alt="Maria-Nives" className='bild '></img></div>
            <div>
                <h1 className='mntitle'> Maria-Nives <br /> Gallo</h1>
            </div>
        </div>

    )
}

export default Home
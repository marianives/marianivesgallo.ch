import React from 'react'
import BoxEins from './BoxEins.js'
import BoxZwei from './BoxZwei.js'
import BoxDrei from './BoxDrei.js'

const Ausbildung = () => {
    return (
        <div className='ausbildung'>
            <h1 className='titel'>Ausbildung</h1>
            <div className='boxdiv'>
                <BoxEins>
                </BoxEins>
                <h1 className='strich'> |</h1>
                <BoxZwei>
                </BoxZwei>
                <h1 className='strich'> |</h1>
                <BoxDrei>
                </BoxDrei>
            </div>
        </div>
    )
}


export default Ausbildung
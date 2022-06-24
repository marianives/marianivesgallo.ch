import React from 'react'
import { Icon } from '@iconify/react';


const Getintouch = () => {
    return (
        <div className='intouch'>
            <h1 className='titelgit'>
                Get in touch
            </h1>
            <div className='socials'>
                <p className='linkedin'>
                    <a href='https://www.linkedin.com/in/maria-nives-gallo-9aab48239/' className='linkedin' target="_blank" rel="noreferrer">
                        <Icon icon="akar-icons:linkedin-box-fill" />
                    </a>
                </p>
                <p className='email'>
                    <a href='mailto:gallomarianives@gmail.com' className='email'><Icon icon="line-md:email-twotone" /></a>
                </p>
            </div>

        </div >
    )
}

export default Getintouch
import React from 'react'

function BoxDrei({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxDrei>
            <div className='boxx'>
                <p class="schule">Primarschule Muhen</p>
                <p class="jahr">2011-2017</p>
            </div>
        </BoxDrei>
    )
}
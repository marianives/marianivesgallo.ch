import React from 'react'

function BoxZwei({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxZwei>
            <div className='boxx'>
            <p class="schule">Bezirksschule Kölliken</p>
            <p class="jahr">2017-2020</p>
            </div>
        </BoxZwei>
    )
}
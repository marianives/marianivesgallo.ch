import React from 'react'

function BoxDrei({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxDrei
            style={{
                backgroundColor: '#EEDEE3',
                color: 'black',
                borderRadius: 15,
                height: 160,
                padding: 10,
                width: 200,
            }}
        >
            <p class="schule">Primarschule Muhen</p>
            <p class="jahr">2011-2017</p>
        </BoxDrei>
    )
}
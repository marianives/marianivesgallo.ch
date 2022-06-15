import React from 'react'

function BoxDrei({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxDrei
            style={{
                backgroundColor: '#EEDEE3',
                borderRadius: 15,
                minHeight: 150,
                padding: 6,
                width: 400,
            }}
        >
            <p class="schule">Primarschule Muhen</p>
            <p class="jahr">2011-2017</p>
        </BoxDrei>
    )
}
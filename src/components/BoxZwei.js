import React from 'react'

function BoxZwei({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxZwei
            style={{
                backgroundColor: '#EEDEE3',
                color: 'black',
                borderRadius: 15,
                height: 160,
                padding: 10,
                width: 200,
            }}
        >
            <p class="schule">Bezirksschule Kölliken</p>
            <p class="jahr">2017-2020</p>
        </BoxZwei>
    )
}
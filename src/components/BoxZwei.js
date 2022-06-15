import React from 'react'

function BoxZwei({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxZwei
            style={{
                backgroundColor: '#EEDEE3',
                borderRadius: 15,
                minHeight: 150,
                padding: 12,
                width: 400,
            }}
        >
            <p class="schule">Bezirksschule Kölliken</p>
            <p class="jahr">2017-2020</p>
        </BoxZwei>
    )
}
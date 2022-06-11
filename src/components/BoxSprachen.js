import React from 'react'

function BoxSprachen({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxSprachen
            style={{
                backgroundColor: 'rgb(226, 242, 255)',
                color: 'black',
                borderRadius: 15,
                minHeight: 150,
                padding: 12,
                width: 400,
            }}
        >
            <p>Java</p>
            <p>HTML / CSS</p>
            <p>C# / Windows Forms</p>
            <p>Linux</p>
            <p>MySQL / Datenbanken entwerfen</p>
            <p>Arduino</p>
            <p>Microsoft Office</p>
        </BoxSprachen>
    )
}
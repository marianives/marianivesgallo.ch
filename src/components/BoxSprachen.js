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
            <p className='titlesprachen'>Skills</p>
            <p className='sprachen'>Java</p>
            <p className='sprachen'>HTML / CSS</p>
            <p className='sprachen'>C# / Windows Forms</p>
            <p className='sprachen'>Linux</p>
            <p className='sprachen'>MySQL / Datenbanken entwerfen</p>
            <p className='sprachen'>Arduino</p>
            <p className='sprachen'>Microsoft Office</p>
            <p className='sprachen'>React.js</p>
            <p className='sprachen'>Algorithmen entwerfen</p>
        </BoxSprachen>
    )
}
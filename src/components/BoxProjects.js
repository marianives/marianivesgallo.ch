import React from 'react'

function BoxProjects({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxProjects
            style={{
                backgroundColor: 'rgb(226, 242, 255)',
                color: 'black',
                borderRadius: 15,
                minHeight: 150,
                padding: 12,
                width: 400,
            }}
        >

        </BoxProjects>
    )
}
import React from 'react'

function BoxEins({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
  return (
    <BoxEins
      style={{
        backgroundColor: '#EEDEE3',
        color: 'black',
        borderRadius: 15,
        minHeight: 200,
        padding: 12,
        width: 400,
      }}
    >
      <p class="schule">Informatikmittelschule Alte Kanti Aarau / Berufsfachschule BBBaden</p>
      <p class="jahr">2020-2024</p>
    </BoxEins>
  )
}
import React from 'react'

function BoxEins({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
  return (
    <BoxEins>
      <div className='boxx'>
        <p class="schule">Informatikmittelschule <br /> Alte Kanti Aarau / <br /> Berufsfachschule BBBaden</p>
        <p class="jahr">2020-2024</p>
      </div>
    </BoxEins>
  )
}
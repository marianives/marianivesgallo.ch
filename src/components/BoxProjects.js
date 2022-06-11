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

            <h1 className='titlesprachen'>Projects</h1>
            <p className='project'>
                Gerne können Sie meine wichtigsten Portfolios<br />
                &#40;8 insgesamt&#41; des Lernateliers in dieser Sammlung ansehen: <br />
                <a href='https://portfolio.bbbaden.ch/view/view.php?t=e15PZfdOlrnyR76V4bkN' className='link' target="_blank" rel="noreferrer">
                    Portfolios Mahara</a>
            </p>
            <p className='project'>
                Meine Projekte, wie diese Website, können Sie auf GitHub finden: <br />
                <a href='https://github.com/marianives?tab=repositories' className='link' target="_blank" rel="noreferrer">GitHub Profile</a>
            </p>

            <p className='project'>
                In meiner Freizeit nehme ich an Online-Kursen teil und vertiefe mich mit den neugelernten Programmiersprachen oder lerne neue kennen: <br />
                <a href='https://open.hpi.de/courses?q=&channel=&lang=&topic=Programming&level=' className='link' target="_blank" rel="noreferrer">Online Selbstlernkurse</a>
            </p>
        </BoxProjects>

    )
}
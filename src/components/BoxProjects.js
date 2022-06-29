import React from 'react'


function BoxProjects({ children, ...props }) {
    return <div {...props}>{children}</div>
}

export default function App() {
    return (
        <BoxProjects
            style={{
                backgroundColor: 'rgb(226, 242, 255)',
                borderRadius: 15,
                minHeight: 100,
                padding: 7,
                width: 250,

            }}
        >

            <h1 className='titlesprachen'>Projects</h1>
            <p className='project'>
                <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='project' target="_blank" rel="noreferrer">Portfolio Sammlung:<br /></a>
                <a href='https://portfolio.bbbaden.ch/view/view.php?t=uiaHDgd4oy08cjf7VYEw' className='link' target="_blank" rel="noreferrer">
                    <span class="iconify" data-icon="emojione-v1:document-with-text"></span>
                </a>
            </p>
            <p className='project'>
                <a href='https://github.com/marianives?tab=repositories' className='project' target="_blank" rel="noreferrer">GitHub Profile with projects:<br /></a>
                <a href='https://github.com/marianives?tab=repositories' className='link' target="_blank" rel="noreferrer"><span class="iconify" data-icon="akar-icons:github-fill"></span></a>
            </p>

            <p className='project'>
                <a href='https://github.com/marianives?tab=repositories' className='project' target="_blank" rel="noreferrer">Freizeit Selbstlernstudium: <br /></a>
                <a href='https://open.hpi.de/courses?q=&channel=&lang=&topic=Programming&level=' className='link' target="_blank" rel="noreferrer">
                    <span class="iconify" data-icon="twemoji:school"></span>
                </a>
            </p>
        </BoxProjects>

    )
}
import React from 'react'
import './ProjectPage.css'

const ProjectPage = (props) => {
    return(
        <div className={`project-page-div + ${props.project.Clase}`}>

        <p> {props.project.Titulo} </p>

        </div>
    )
}

export default ProjectPage
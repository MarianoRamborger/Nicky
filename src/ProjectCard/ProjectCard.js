import React from 'react'
import './ProjectCard.css'
import { Link } from "react-router-dom"

const ProjectCard = (props) => {

    const {Titulo, Clase, Endpoint } = props.project

    return(
        <Link className={`project-card-div ${Clase}`} to={`/${Endpoint}`} >

        {Titulo}
  

        </Link>
    )
}

export default ProjectCard
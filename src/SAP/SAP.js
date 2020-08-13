import React from 'react'
import ProjectSAP from '../ProjectSAP/ProjectSAP.js'
import './SAP.css'


const SAP = (props) => {
    const ProjectList = props.ProjectList

    const [Selected, changeSelected] = React.useState("")




    return(

        <div className="Sap-div">
          {ProjectList.map(project => {
          
            return <ProjectSAP project={project}  key={project.Titulo} changeSelected={changeSelected} Selected={Selected} />
          
          })}

       
          </div> 
          )


}

export default SAP
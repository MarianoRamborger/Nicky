import React from 'react'
import './ProjectSAP.css'

const ProjectSAP  = (props) => {
    const {Titulo, Clase, Endpoint } = props.project


    const handleChangeSelected = () => {
        props.changeSelected(Titulo)
    }


   return(
       <div className={`project-SAP-div ${Clase}` + (props.Selected === Titulo ? ` SAP-selected` : ' SAP-unselected' )} onClick={handleChangeSelected}>


        {Titulo}

       </div>
   )

}

export default ProjectSAP
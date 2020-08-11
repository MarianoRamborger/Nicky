import React from 'react'
import './Drawer.css'
import {Link} from 'react-router-dom'

const Drawer = (props) => {
    // const [drawerState, changedrawerState] = React.useState(true)

    return(
        // <div className={"drawer-div" + (drawerState ? 'open' : 'closed')}>

        <div className={"drawer-div open"}>

        {
            props.projects.map(project => {
                return <Link className={`mini-project-card + ${project.Clase}`} to={`${project.Endpoint}`}>

                <p> {project.Titulo } </p>

                </Link>
               
            })
        }
         <Link className={`mini-project-card gray`} to={"/"}>

                <p> Home </p>
                </Link>
        
        </div>
    )

}

export default Drawer
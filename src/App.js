import React from 'react';
import './App.css';
import Bio from './Bio/Bio'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectList from './ProjectList/ProjectList'
import Drawer from './Drawer/Drawer.js'
import ProjectPage from './ProjectPage/ProjectPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  //Link
} from "react-router-dom";




const App = () => {
  // const [ProjectState, ChangeProjectstate] = React.useState("none")

  return(

    <Router>

    <Bio />

    <Switch>

    <Route exact path="/">

    <div className="project-flex">
    {ProjectList.map(project => {
      return <ProjectCard project={project} />
    })}
    </div>

    </Route>

    <Route exact path="/proyecto1">
        <div className="project-flex">  
          <Drawer projects={ProjectList} />
          <ProjectPage project={ProjectList[0]} />
        </div>
    </Route>
    <Route exact path="/proyecto2">
        <div className="project-flex">  
          <Drawer projects={ProjectList} />
          <ProjectPage project={ProjectList[1]} />
        </div>
    </Route>
    <Route exact path="/proyecto3">
        <div className="project-flex">  
          <Drawer projects={ProjectList} />
          <ProjectPage project={ProjectList[2]} />
        </div>
    </Route>
    <Route exact path="/proyecto4">
        <div className="project-flex">  
          <Drawer projects={ProjectList} />
          <ProjectPage project={ProjectList[3]} />
        </div>
    </Route>





    </Switch>

    </Router>

  )
}

export default App;

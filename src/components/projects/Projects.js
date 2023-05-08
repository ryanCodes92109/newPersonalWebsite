import React from 'react'
import './Projects.css'
import projects from './ProjectDescription'
import ProjectCard from './ProjectCard'

const Projects = () => {

const mappedProjects = projects.map((project, index) => (<ProjectCard key={index} {...project} />))
  return (
    <div className='projectsContainer'>
       <span className='projectContainerTitle'>Previous Projects:</span>
        <div className="projectCardParent">
          {mappedProjects}
        </div>

    </div>
  )
}

export default Projects

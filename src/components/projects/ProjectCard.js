import React from 'react'

const ProjectCard = ({name, description, technologiesUsed}) => {

  return (
    <>
        <div className= 'projectCard'>
            <span className='projectName'>Name: <br/> {name}</span> <br/>
            <article className='description'>Description: <br/> {description}</article><br/>
            <span className='tech'>Technologies: <br/> {technologiesUsed}</span><br/>
        </div>
    </>
  )
}

export default ProjectCard
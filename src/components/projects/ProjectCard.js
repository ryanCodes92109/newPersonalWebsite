import React from 'react'

const ProjectCard = ({name, description, technologiesUsed}) => {

  return (
    <>
        <div className= 'projectCard'>
            <span className='projectName'>{name}</span> <br/>
            <article className='description'>Description: <br/> {description}</article><br/>
            <span className='tech'>Technologies: {technologiesUsed}</span><br/>
        </div>
    </>
  )
}

export default ProjectCard
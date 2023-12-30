import React from 'react';
import { useFetchProjects } from './fetchProjects'; 

const Projects = () => {
    const {loading, projects} = useFetchProjects()   // 注意：这里是对 seFetchProjects()函数返回）return）的值（一个object）进行结构。
    console.log(loading, projects)

    if(loading) {
        return  (
            <section className='projects'>
                <h2>Loading...</h2>
            </section>)
    }

    return (
        <section className='projects'>
            <div className="title">
                <h2>projects</h2>
                <div className="title-underline"></div>
                <div className="projects-center">
                    {projects.map((project) => {
                        const {id, img, url, title} = project
                        return <a href={url} key={id} target='_blank' rel='noreferrer' className='project'>
                                    <img src={img} alt={title} className='img' />
                                    <h5>{title}</h5>
                                </a>
                    })}
                </div>

            </div>
        </section>
    );
}

export default Projects;
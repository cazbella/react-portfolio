    import React from 'react';
    import Card from '../cards/Card';
    import MainCard from '../MainCard';
    import Header from "../layout/Header";
    import "./Projects.css"

    function Projects({ work }) {
        return (
            <div className="projects-container">
                <Header title="Projects" />
                <div className="content-container">
                    <MainCard className='mb-4' />
                    <div className="row card-deck">
                        {work.map((project) => (
                            <Card key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    export default Projects;
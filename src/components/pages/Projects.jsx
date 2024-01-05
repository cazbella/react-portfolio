    import React from 'react';
    import Card from '../cards/Card';
    import MainCard from '../MainCard';

    function Projects({ work }) {
    return (
        <div>
        <h2>Projects</h2>
        <MainCard className='mb-4' />
        <div className="row card-deck mb-4">
            {work.map((project) => (
            <Card key={project.id} {...project} />
            ))}
        </div>
        </div>
    );
    }

    export default Projects;

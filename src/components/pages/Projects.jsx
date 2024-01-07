import React from 'react';
import Card from '../cards/Card';
import MainCard from '../MainCard';
import Header from "../layout/Header";

function Projects({ work }) {
    return (
        <div>
            <Header title="Projects" />
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

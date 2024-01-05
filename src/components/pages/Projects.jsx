import React from 'react';
import Card from '../cards/Card';
import MainCard from '../MainCard';

function Projects({ work }) {
  return (
    <div>
      <h2>Projects</h2>
      <MainCard />
      <div className="row">
        {work.map((project) => (
          <div key={project.id} className="col-6">
            <Card {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import './style.css';
import Card from './card';

import { projectData } from './data';

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-5">
      <div className="d-flex flex-wrap justify-content-between container py-4">
        {projectData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

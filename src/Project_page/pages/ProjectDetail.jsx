import { useParams } from 'react-router-dom';
import projectData from '../../data/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(proj => proj.id === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="project-detail-page">
      <h2>{project.title}</h2>
      <p>{project.details}</p>
      <div className="tech-tags">
        {project.technologies.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
      <div className="screenshots">
        {project.screenshots.map((src, i) => (
          <img key={i} src={src} alt={`Screenshot ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;

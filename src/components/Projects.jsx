import styles from './Project.module.css';
import projectData from '../data/projectData';
import { Button } from 'bootstrap-react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { BiBookOpen } from 'react-icons/bi';
// import Button from "./Button";
const ProjectPreview = () => {
  return (
    <div className={styles.project}>
      {projectData.map((project) => (
        <div key={project.id} className={styles.projectDiv}>
          <h3 className={styles.title}>{project.label}</h3>
          <img className={styles.img} src={project.image} alt={project.label} />
          <p className={styles.description}>{project.description}</p>{' '}
          <span className={styles.btnLink}>
            <Link
              className={styles.link}
              to={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: 'black' }} /> View Project
            </Link>
            <Link className={styles.link2}>
              {' '}
              <BiBookOpen /> Complete Blog
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
};

export { ProjectPreview };

const Projects = () => {
  return <div>projects</div>;
};

export default Projects;

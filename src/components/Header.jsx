import ToggleButton from './ToggleButton';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className='link'>
        {' '}
        Home
      </Link>
      <Link to="/resume" className="link">
        {' '}
        Resume
      </Link>
      <Link to="/projects" className="link">
        {' '}
        Project
      </Link>
      <Link to="/about" className="link">
        {' '}
       About 
      </Link>
     

      <span className={styles.toggleBtn }><ToggleButton /> </span>
        
     
    </div>
  );
};

export default Header;

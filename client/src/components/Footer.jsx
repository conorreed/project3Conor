import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer bg-gray-900 flex justify-between py-4 w-100">
      <p style={{ color: 'white' }}>Welcome to the WARZONE</p>
      <p style={{ color: 'white' }}>
        <a
          href="https://github.com/MWandall/project3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.5rem' }} />
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Footer;
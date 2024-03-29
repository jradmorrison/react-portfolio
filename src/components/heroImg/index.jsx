import './style.css';
import { FaChevronDown } from 'react-icons/fa';

const heroImg = () => {
  return (
    <div className="hero">
      <div className='title container d-flex justify-content-end'>
        // WEB DEVELOPER
      </div>
      <div className="d-flex justify-content-center arrow">
        <a href="#about-me">
          <FaChevronDown
            size={40}
            style={{ color: '#fff' }}
            className='bounce'
          />
        </a>
      </div>
    </div>
  );
};

export default heroImg;

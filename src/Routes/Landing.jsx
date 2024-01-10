import '../styles/Landing.css';
import hero from '../assets/hero/hero.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <div className="landing-logo">
          <p>IMPRESSIFY</p>
        </div>
        <div className="links">
          <ul className="nav-links">
            <li className="nav-link">Blog</li>
            <li className="nav-link"> Log in</li>
            <Link to="resume" className="nav-link landing-button">
              Get Started
            </Link>
          </ul>
        </div>
      </div>
      <div className="landing-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Unleash the Power of <span>Your</span> Story
          </h1>
          <p className="hero-subtitle">
            Introducing Impressify - Your Gateway to Career Brilliance! Craft
            stunning resumes effortlessly, where every word resonates with
            impact, and your professional journey unfolds with the elegance it
            deserves.{' '}
          </p>
          <Link className="cta landing-button" to="resume">
            Create Your Story
          </Link>
        </div>
        <div className="hero-img-div">
          <img className="hero-img" src={hero} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

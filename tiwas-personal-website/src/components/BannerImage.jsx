import './BannerImage.css';

export default function BannerImage() {
  return (
    <div className="hero-section">
      {/* Left side - Text content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hello, I'm <span className="hero-name">Tiwa</span></h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            Creative builder and problem solver with a passion for building things that matter.
          </p>
        </div>
        
        {/* Social Media Buttons */}
        <div className="hero-buttons">
          <a 
            href="https://www.linkedin.com/in/tiwalayo-oluwalade-3408742a9/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/TJ-Projects3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
          >
            GitHub
          </a>
          <a 
            href="https://replit.com/@toluwal1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link replit"
          >
            Replit
          </a>
        </div>
      </div>

      {/* Right side - Profile Image */}
      <div className="hero-image" aria-label="Profile photo">
        <div className="banner-image">
          <img
            className="banner-image__img"
            src="/tiwa-professional.jpg"
            alt="Tiwa professional headshot"
          />
        </div>
      </div>
    </div>
  );
}

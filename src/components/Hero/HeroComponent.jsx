import React from 'react';
import './HeroComponent.css';  // Make sure this path is correct

const HeroComponent = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Automate Your Facebook Outreach with Ease</h1>
          <p>
            Ping Prospect is a powerful desktop app that automates your Facebook direct messages,
            saving you time and effort. Whether you are a business or an individual, our desktop bot helps you
            reach more people efficiently.
          </p>
          <div className="hero-buttons">
{/*             <a href="https://www.dropbox.com/scl/fi/59ugpswtikgri0a2ondgn/gui.exe?rlkey=s2q6680ezxccpg5rx7clbmlbc&st=rma8zejy&dl=1"> */}
              <button className="btn-primary">Download Our Desktop App</button>
{/*             </a> */}
            <a href="#features">
              <button className="btn-secondary">Learn More</button>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

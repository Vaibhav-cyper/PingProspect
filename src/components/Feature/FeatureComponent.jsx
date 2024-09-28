import React from 'react';
import './FeatureComponent.css';

const FeatureComponent = () => {
  return (
    <div id="features" className="feature-container">
      <div className="feature-header">
        <h1>Experience the ease of reaching your audience without the hassle.</h1>
        <p>
       
        </p>
      </div>

      {/* Existing Features */}
      <div className="feature-boxes">
        <div className="feature-box">
          <img src={'/LogoSymbol.png'} alt="Logo" className="icon-image" />
          <h3>Effortless One-Click Data Imports</h3>
          <p>Save valuable time by easily import user data from Excel for seamless outreach.</p>
        </div>

        <div className="feature-box">
          <img src={'/LogoSymbol.png'} alt="Logo" className="icon-image" />
          <h3>Personalized Messaging Made Effortless</h3>
          <p>Send tailored messages to your contacts automatically.</p>
        </div>
        <div className="feature-box">
          <img src={'/LogoSymbol.png'} alt="Logo" className="icon-image" />
          <h3>Bulk Messaging for Greater Reach</h3>
          <p>Effortlessly reach multiple contacts at once without getting banned</p>
        </div>

      </div>

      {/* New Additional Features */}
      <div className="feature-boxes">
        <div className="feature-box">
          <img src={'/LogoSymbol.png'} alt="Logo" className="icon-image" />
          <h3>Human-Like Interaction to Avoid Spam Filters</h3>
          <p>Our bot mimic human behavior with natural delays.</p>
        </div>

        <div className="feature-box">
          <img src={'/LogoSymbol.png'} alt="Logo" className="icon-image" />
          <h3>Automatic Chat Management Features</h3>
          <p>Close chat windows automatically and recover from crashes.</p>
        </div>

        <div className="feature-box">
          <img src={'/LogoSymbol.png'} alt="Logo" className="icon-image" />
          <h3>Robust Error Handling and Recovery</h3>
          <p>Automatically retries failed messages and manages chat sessions.</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureComponent;

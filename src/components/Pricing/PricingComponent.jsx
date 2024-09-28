import React, { useState } from 'react';
import './PricingComponent.css';

const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="pricing-container" id='pricing'>
      <h2>Our Pricing Plans</h2>
      <p>Choose the plan that fits your needs best.</p>

      <div className="toggle-btns">
        <button
          className={isMonthly ? 'active' : ''}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={!isMonthly ? 'active' : ''}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </button>
      </div>

      <div className="pricing-cards">
        {isMonthly ? (
          <div className="pricing-card">
            <h3>Monthly Plan</h3>
            <p className="price">$19/mo</p>
            <ul>
              <li>✔ Easily Deliver Personalized Messages</li>
              <li>✔ Seamless One-Click Data Imports</li>
              <li>✔ Reach More Customers with Bulk Messaging</li>
              <li>✔ Human-Like Interaction to Avoid Spam Detection</li>
              <li>✔ Strong Error Handling and Quick Recovery</li>
              <li>✔  Instant, On-Demand Support</li>
            </ul>
            <button className="btn">Download Our Desktop App</button>
          </div>
        ) : (
          <div className="pricing-card">
            <h3>Yearly Plan</h3>
            <p className="price">$18/mo</p>
            <ul>
              <li>✔ Easily Deliver Personalized Messages</li>
              <li>✔ Seamless One-Click Data Imports</li>
              <li>✔ Reach More Customers with Bulk Messaging</li>
              <li>✔ Human-Like Interaction to Avoid Spam Detection</li>
              <li>✔ Strong Error Handling and Quick Recovery</li>
              <li>✔  Instant, On-Demand Support</li>
            </ul>
            <a href="https://github.com/Vaibhav-cyper/Ping-Prospect_exefiloe/releases/download/v1.0.0/gui.exe">
              <button className="btn">Download Our Desktop App</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingComponent;

import React from 'react';
import './PaymentError.css'; // Import the CSS file

const PaymentError = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1>Sorry, we cannot process your payment</h1>
        <p>
          Because we are still in beta, We'll send you an email when we release
          our stable version. We appreciate your intention for supporting us. Thanks!
        </p>
      </div>
    </div>
  );
};

export default PaymentError;

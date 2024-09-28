import React from 'react';
import './FAQComponent.css';

const faqs = [
  {
    question: "What are the capabilities of a Facebook Messenger Bot?",
    answer: "A Facebook Messenger Bot can help you reach out to group members and engage with your competitor's audience on Facebook."
  },
  {
    question: "Why does the bot not work after restarting the browser?",
    answer: "If the bot is working, and if you restart your browser, you may need to click the Stop button to PAUSE the bot first, then click the Start button to let the bot continue to work"
  },
  {
    question: "Why I have already paid for the subscription and it doesn't give me the pro version?",
    answer: "Maybe the Stripe email and the login email are mixed. You need to log in with your Stripe login email."
  },
  {
    question: "How to cancel my subscription?",
    answer: "You can cancel your premium subscription at any time, by clicking the PRO button, and finally clicking the CANCEL SUBSCRIPTION button"
  },
  {
    question: "Why is it showing Failed to extract data from CSV.",
    answer: "Maybe because the CSV file is protected , Or you may need to recreate another CSv file and retry with it. Feel free to contact us if you have any questions at support@pingprospect.com "
  },
  {
    question: "How does the script personalize messages?",
    answer: "It uses first names extracted from Excel and randomly selects from pre-written message by you, ensuring each user receives a customized message addressed to them."
  },
  {
    question: "What happens if Facebook doesn’t load correctly?",
    answer: "The App includes error handling, retrying failed actions such as logging in, finding message boxes, or sending messages. It will attempt multiple times before moving to the next task."
  },
  {
    question: "How does the script avoid being flagged as spam by Facebook?",
    answer: "The App mimics human behavior by introducing random delays between actions, particularly when sending messages, to avoid detection by Facebook's anti-spam systems."
  },
  {
    question: "What should I do if the browser crashes?",
    answer: "The app is designed to restart the browser and continue from where it left off, minimizing the impact of unexpected browser closures."
  },
  {
    question: "Can I use this with other browsers like Edge or Chrome?",
    answer: "Currently, the app is set up for Firefox only,and it cannot work with other browsers like Chrome."
  }
];

const FAQComponent = () => {

  const openGmail = () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfSkjFcrlJktQZfQSLsRjgHHktmMfJnkXZkbWDPXbKlhJmrMxwZnTPKwvVGcspNLFXhXB', '_blank');
  };


  return (
    <div id="support" className="faq-container">
      <div className="faq-header">
        <h2>FAQs</h2>
        <p></p>
      </div>

      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h3>Still have questions?</h3>
        <p> Reach Out to Us via Mail Anytime!</p>
        <button className="contact-btn" onClick={openGmail}>Contact Us</button>
      </div>
    </div>
  );
};

export default FAQComponent;

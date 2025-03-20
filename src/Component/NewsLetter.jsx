import React, { useState } from "react";
import letterBg from "../assets/images/SubscribeSectionBackground.png";

export default function NewsLetter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter your email");
    } else if (!name) {
      return alert("Please enter your name");
    }
    setSubmitted(true);
  };

  return (
    <div
      className="news-letter"
      style={{ backgroundImage: `url(${letterBg})` }}
    >
      <div className="letter-content">
        <header className="letter-header">
          <h4>subscribe to our newsletter</h4>
          <h3>Get weekly updates</h3>
        </header>

        {submitted ? (
          <p>Thanks For Subscribing!!</p>
        ) : (
          <form onSubmit={handleSubmit} className="letter-form">
            <p>Fill in your details to join the party!</p>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

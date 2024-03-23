import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text"> Chat With Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt={"Email"} />
          <a href="mailto:nurud43@gmail.com" className="p-text">
            nurud43@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt={"Mobile"} />
          <a href="tel:+1 (757) 752-6127" className="p-text">
            (757) 752-6127
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div aoo__flex>
            <input
              className="p-text"
              type="text"
              placeholder=" Your Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div aoo__flex>
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChange}
            />
          </div>

          <button className="p-text" type="button" onClick={handleSubmit}>
            {loading ? "Sending" : "Submit Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for your getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

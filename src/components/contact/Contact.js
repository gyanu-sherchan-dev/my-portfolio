import React, { useState, useRef } from "react";
import "./Contact.scss";

import emailjs from "@emailjs/browser";

const Contact = ({ menuOpen }) => {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_w03k3yv",
        "template_aejwpj6",
        form.current,
        "hC1QNBUQvmxxCIqed"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={"contact " + (menuOpen && "active")} id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <form ref={form} onSubmit={sendEmail}>
          <input type="email" name="from_name" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <input type="submit" value="Send" className="button" />

          {message && <span>Thanks, I will reply ASAP 🙂</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactMe.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   


    emailjs
      .sendForm(
        "service_a230hdv",
        "template_i230tvs",
        form.current,
        "k2ig4fUpy9zslaFZb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" rows="8" cols="50" />
      <input type="submit" value="Send" />
    </form>
  );
};

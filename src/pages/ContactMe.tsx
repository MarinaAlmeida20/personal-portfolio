import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/ContactMe.css";

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        toast.dismiss();

        emailjs
            .sendForm(
                "service_a230hdv",
                "template_i230tvs",
                form.current,
                "k2ig4fUpy9zslaFZb"
            )
            .then(
                (result) => {
                    // console.log(result.status)
                    // console.log(result.text);
                    // console.log("message sent");
                    e.target.reset();
                    if (result.status === 200) {
                        toast("🦄 thanks for your message!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Something went wrong", {
                        position: "top-right",
                        autoClose: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" rows="8" cols="50" required />
            <input type="submit" value="Send" />
        </form>
    );
};

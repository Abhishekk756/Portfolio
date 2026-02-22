import React from "react";
import Form from "../components/Form";
import HeroImg2 from "../components/HeroImg2";

const Contact = () => {
  return (
    <div className="contact-page">
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
    </div>
  );
};

export default Contact;
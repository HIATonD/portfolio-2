import { useRef } from "react";
import emailjs from "@emailjs/browser";

import PageHeader from "../../components/pageHeader/PageHeader";
import { Animate } from "react-simple-animate";

import { BsChatRightTextFill } from "react-icons/bs";

import "./contacts.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcy94ue",
        "template_spghhrh",
        form.current,
        "g3Zqxunvf1OciZiO7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="about" className="about">
      <PageHeader
        headerText="Contact"
        icon={<BsChatRightTextFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-1050px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header">Get in touch with me.</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(1050px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__content-form"
          >
            <div className="contact__content-form-controls">
              <div>
                <input
                  required
                  type="text"
                  name="user_name"
                  className="inputName"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  type="email"
                  name="user_email"
                  className="inputEmail"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  type="text"
                  name="message"
                  className="inputDes"
                  rows={5}
                />
                <label htmlFor="des" className="desLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit" value="Send">
              Submit
            </button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;

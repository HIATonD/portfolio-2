import PageHeader from "../../components/pageHeader/PageHeader";

import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

import imgBlog from "../../assets/profile-img.png";

import "./about.css";

const personalDetails = [
  { label: "Name:", value: "Tran Ton" },
  { label: "Age:", value: "20" },
  { label: "Address:", value: "HCM City, Viet Nam" },
  { label: "Email:", value: "tontran788@gmail.com" },
  { label: "Contact No:", value: "(+84) 33 7703 026" },
];

const summary =
  "My field of study specializes in software development, but I have a strong passion for front-end development, so I have taken the initiative to seek out and self-study the majority of my knowledge. I am not hesitant to further my learning in order to enhance my skills and personal growth.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content-wrapper">
          <Animate
            play
            duration={0.6}
            delay={0.2}
            start={{ transform: "translateX(-1050px)" }}
            end={{ transform: "translate(0px)" }}
          >
            <h3>Front end developer</h3>
            <p>{summary}</p>
          </Animate>

          <Animate
            play
            duration={0.6}
            delay={0.2}
            start={{ transform: "translateX(-550px)" }}
            end={{ transform: "translate(0px)" }}
          >
            <h3 className="piheadertext">Personal Information</h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content-service">
          <img src={imgBlog} alt="Image" className="img__about" />
        </div>
      </div>
    </section>
  );
};

export default About;

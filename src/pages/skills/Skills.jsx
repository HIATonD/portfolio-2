import PageHeader from "../../components/pageHeader/PageHeader";

import { Animate } from "react-simple-animate";

import { BsFillLightningFill } from "react-icons/bs";

import { skillData } from "./skilldata.js";

import "./skills.css";

const Skills = () => {
  return (
    <section id="skill" className="skill">
      <PageHeader
        headerText="My Skills"
        icon={<BsFillLightningFill size={40} />}
      />
      <div className="skill__content-wrapper">
        {skillData.map((item, index) => (
          <div key={index} className="skill__content-wrapper--inner-content">
            <Animate
              play
              duration={0.6}
              delay={0.2}
              start={{ transform: "translateY(800px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skill__content-wrapper--inner-content__context">
                {item.label}
              </h3>
              <div>
                {item.data.map((skill, index) => (
                  <div key={index} className="text-wrapper">
                    <p>{skill.skillName}</p>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

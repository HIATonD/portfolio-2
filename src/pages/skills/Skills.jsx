import PageHeader from "../../components/pageHeader/PageHeader";

import { BsInfoCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Skills;

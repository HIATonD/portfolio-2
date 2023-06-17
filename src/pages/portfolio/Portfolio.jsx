import PageHeader from "../../components/pageHeader/PageHeader";

import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Portfolio;

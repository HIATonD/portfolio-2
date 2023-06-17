import PageHeader from "../../components/pageHeader/PageHeader";

import { BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Contact;

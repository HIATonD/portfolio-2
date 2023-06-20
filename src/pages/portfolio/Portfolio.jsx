import PageHeader from "../../components/pageHeader/PageHeader";

import { BsClipboardHeartFill } from "react-icons/bs";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="about" className="about">
      <PageHeader
        headerText="Portfolio"
        icon={<BsClipboardHeartFill size={40} />}
      />
      <div className="portfolio__content-wrapper">
        <h1 className="title">It's Coming soon...</h1>
        <h2 className="title">because i'm designing this part.</h2>
      </div>
    </section>
  );
};

export default Portfolio;

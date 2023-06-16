import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMe = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ton
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translate(0px)" }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMe}>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;

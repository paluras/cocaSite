import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import Clients from "./clients";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TeamLand from "./team";

const Landing = () => {
  const [visible, setVisible] = useState();
  const { ref, inView } = useInView({});
  useEffect(() => {
    inView ? setVisible("show") : setVisible("hidden");
    return () => {};
  }, [inView]);

  return (
    <main>
      {" "}
      <a href="#first">
        <button className="snap">I </button>
      </a>
      <a href="#second">
        <button className="snap two">II </button>
      </a>
      <a href="#third">
        <button className="snap three">III </button>
      </a>
      
        <FirstPage />
    
      <SecondPage visible={visible} ref={ref} />
      <ThirdPage />
      <Clients />
      <TeamLand />
    </main>
  );
};

export default Landing;

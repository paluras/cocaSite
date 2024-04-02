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
      <FirstPage />
      <SecondPage visible={visible} ref={ref} />
      <ThirdPage />
      <Clients />
      <TeamLand />
    </main>
  );
};

export default Landing;

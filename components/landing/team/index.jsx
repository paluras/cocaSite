import "./style.css";
import { client } from "../../../sanity";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../utility/imageBuildSanity";
const TeamLand = () => {
  const [team, setTeam] = useState([]);
  console.log(team);
  useEffect(() => {
    const query = `*[_type == "team"]{
      title,
      "personUrl": image.asset->url,
      body,
      
    }`;

    client.fetch(query).then(setTeam).catch(console.error);
  }, []);

  return (
    <section className="team">
      <h1 id="echipa-title" className="big-title">
        Echipa
      </h1>
      {team.map((item) => (
        <div id="team" className="team-container">
        
            <div className="text-container-team">
              <h2>{item.title}</h2>
              <PortableText value={item.body}/>
            </div>
          
          <div className="img-container">
            <img width={300} height={300} src={urlFor(item.personUrl)} alt="" />
            <div className="blur"></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamLand;

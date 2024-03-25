import "./style.css";
import { useEffect, useState } from "react";
import { client } from "../../../sanity";
import { urlFor } from "../../../utility/imageBuildSanity";

const Clients = () => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "clients"]{
          _id,
          url,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setLogo(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <div className="worked-with">
        <div className="worked-icons">
          {logo.map((item, index) => (
            <a key={index} href={item.url}>
              <img
                style={{
                  width: "120px",
                }}
                src={urlFor(item.imageUrl)}
                alt="FTJ Logo"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;

import React, { useEffect, useState } from "react";
import { client } from "../../sanity";
import { urlFor } from "../../utility/imageBuildSanity";

import "./style.css";
import { PortableText } from "@portabletext/react";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "article"]{date, body, title, "imageUrl": image.asset->url}`
      )
      .then((data) => setArticles(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="blog">
        <h1 id="echipa-title" className="big-title">Articole</h1>

        {/* Map through the blogData array and create a blog post for each item */}

        <div className="blog-container">
          {articles.map((article, index) => (
            <article key={index} className="blog-text">
              <p>
                <time dateTime="2024/03/24">{article.date}</time>
              </p>
              <img
                className="blog-img"
                src={urlFor(article.imageUrl)}
                alt={article.title}
              />
              <h2>{article.title}</h2>
             
              <PortableText value={article.body} />
              <span className="line"></span>
              
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;

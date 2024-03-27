import React, { useEffect, useState } from "react";
import { client } from "../../sanity";
import { urlFor } from "../../utility/imageBuildSanity";

import "./style.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "article"]{date, title, "imageUrl": image.asset->url, article}`
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
              {article.article.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
              <span className="line"></span>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;

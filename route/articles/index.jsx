import React, { useState } from "react";
import "./style.css";
import { onSnapshot } from "firebase/firestore";
import { notesCollection } from "../../firebase";

const Blog = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogData(notesArr.reverse());
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {children}
      <main className="blog">
        <div className="placeholder-nav"></div>

        {/* Map through the blogData array and create a blog post for each item */}
        {blogData.reverse().map((blogPost, index) => (
          <div className="blog-container" key={index}>
            <div className="title-blog">{blogPost.title}</div>
            <article className="blog-text">
              <div>
                {" "}
                <div className="some">
                  <img
                    className="blog-img"
                    src={`${blogPost.imageUrl}`}
                    alt=""
                  />
                  
                </div>
                <p> {blogPost.text}</p>
                <p> {blogPost.text}</p>
               
              </div>
            </article>

            <div className="data">
              <div className="text-data">Date:</div>
              <div className="the-data">{blogPost.date}</div>
            </div>
            <span className="line"></span>
          </div>
        ))}
      </main>
    </>
  );
};

export default Blog;

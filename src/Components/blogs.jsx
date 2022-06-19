import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import blogPosts from "../data/blog_posts";
import SectionTitle from "./section_title";
import "../index.css";

export default function Blogs(props) {
  const [posts, setPosts] = useState([]);
  const [featurePosts, setFeaturePosts] = useState([]);

  const featurePostsNumber = 2;
  useEffect(() => {
    const postsData = blogPosts.posts;
    setPosts(postsData);
    setFeaturePosts(blogPosts.posts.filter((posts) => posts.featured == true));
  }, [posts]);

  return (
    <div className="">
      <div className="news-area pt-110 bgs " id="blog">
        <SectionTitle title="LATEST BLOGS" />
        <div className="row mt-45 pb-90  ">
          <div className="col-xl-8  asdfContainer">
            <div className="row asdf">
              {featurePosts.slice(0, featurePostsNumber).map((posts, i) => (
                <div className="col-lg-6" key={i}>
                  <div className="single-blog mb-30 pb-40">
                    {posts.blogImage ? (
                      <div className="blog-img">
                        <a href={posts.linkSrc}>
                          <img
                            className="img-fluid"
                            src={posts.blogImage}
                            alt={posts.title}
                          />
                        </a>
                      </div>
                    ) : null}
                    <a
                      href={posts.linkSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="blog-meta">
                        <div className="date">{posts.postedOn}</div>
                      </div>
                      <div className="blog-details pl-30 mt-35 pr-30">
                        <div className="blog-title mb-10">
                          <h2>{posts.title}</h2>
                        </div>
                        <p className="mb-10">{posts.smallDesc}</p>
                        <div className="blog-button">
                          Read More &nbsp;{" "}
                          <i>
                            <FaAngleRight />
                          </i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

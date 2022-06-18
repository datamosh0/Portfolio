import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import blogPosts from "../data/blog_posts";
import SectionTitle from "./section_title";
export default function Blogs(props) {
  const [posts, setPosts] = useState([]);
  const [featurePosts, setFeaturePosts] = useState([]);
  // const [withoutFeaturePosts, setWithoutFeaturePosts] = useState([]);
  // const smBlogPostNumbers = 3;
  const featurePostsNumber = 2;
  useEffect(() => {
    const postsData = blogPosts.posts;
    setPosts(postsData);
    setFeaturePosts(blogPosts.posts.filter((posts) => posts.featured == true));
    // setWithoutFeaturePosts(
    //   blogPosts.posts.filter((posts) => posts.featured !== true)
    // );
  }, [posts]);

  return (
    <div
      className="news-area pt-110 bgs "
      style={{ paddingRight: "18px" }}
      id="blog"
    >
      <SectionTitle title="LATEST BLOGS" />
      <div className="row mt-45 pb-90 ">
        <div className="col-xl-8 mr-15 ml-15">
          <div className="row ">
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
        {/* <div className="col-lg-4 blog-lists-wrapper">
            {withoutFeaturePosts.slice(0, smBlogPostNumbers).map((posts, i) => (
              <div className="blog-item-small-wrapper" key={i}>
                <div className="blog-item-small pr-20">
                  <div className="blog-meta">
                    <div className="date">{posts.postedOn}</div>
                  </div>
                  {posts.blogImage ? (
                    <div className="blog-small-img mr-20 float-left">
                      <Link to={`/blog_details/${posts.id}`}>
                        <img
                          className="img-fluid"
                          src={posts.blogImage}
                          alt={posts.title}
                        />
                      </Link>
                    </div>
                  ) : null}
                  <div className="blog-small-description pt-20 pb-20">
                    <Link to={`/blog_details/${posts.id}`}>
                      <h2>{posts.title}</h2>
                    </Link>
                    <p>{posts.smallDesc}</p>
                  </div>
                </div>
                <span className="horizontal-border">
                  <hr />
                </span>
              </div>
            ))}
          </div> */}
      </div>
    </div>
  );
}

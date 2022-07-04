import React from "react";

export default function PostContent(props) {
  const { title, blogImage, blogText } = props.post;
  return (
    <div className="main-area bgs section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="news-details">
              {blogImage ? (
                <div className="news-details-img mb-4">
                  <img className="img-fluid" src={blogImage} alt={title} />
                </div>
              ) : null}
              <div className="post-details mb-4">
                <p>{blogText}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

import "../index.css";

export default function SingleProject(props) {
  const { capture, link, title, github, tech } = props;

  return (
    <div
      className="text-center mb-3"
      style={{
        boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.46)",
      }}
    >
      <h3 className="py-2">{title}</h3>
      <a href={link} alt="" target="_blank" rel="noopener noreferrer">
        <img
          src={capture}
          alt={title}
          style={{ width: "100%", aspectRatio: "16/10" }}
        ></img>
      </a>
      <h6 className="mt-3">
        <code className="pt-2" style={{ fontSize: "1.3rem" }}>
          {tech}
        </code>
      </h6>
      <p className="flex-col">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://onlinechatter.netlify.app"
          style={{ color: "#c48f43" }}
        >
          Live Demo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${github}`}
          style={{ color: "#c48f43", marginTop: "5px" }}
        >
          Source Code
        </a>
      </p>
    </div>
  );
}

import { ReactNode } from "react";
import "./Card.css";

interface Props {
  maxWidth: string;
  src: string;
  title: string;
  children: ReactNode;
}

const Card = ({ maxWidth, src, title, children }: Props) => {
  return (
    <div
      className="card"
      style={{
        width: `min(80%,${maxWidth})`,
        padding: "1em",
        backgroundColor: "hsl(0, 0%, 100%)",
        borderRadius: "20px",
      }}
    >
      <img
        src={src}
        className="card-img-top"
        alt="card"
        style={{ borderRadius: "10px", marginBottom: ".938rem" }}
      />
      <div
        className="card-body"
        style={{ fontFamily: "Outfit", textAlign: "center" }}
      >
        <h1
          className="card-title"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "hsl(218, 44%, 22%)",
            marginBottom: ".938rem",
          }}
        >
          {title}
        </h1>
        <p
          className="card-text"
          style={{
            fontSize: ".938rem",
            fontWeight: 400,
            color: "hsl(220, 15%, 55%)",
            marginBottom: ".625rem",
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Card;

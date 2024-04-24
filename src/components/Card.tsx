import { ReactNode } from "react";
import "./Card.css";

interface Props {
  width: string;
  src: string;
  title: string;
  children: ReactNode;
}

const Card = ({ width, src, title, children }: Props) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        padding: "16px",
        backgroundColor: "hsl(0, 0%, 100%)",
        borderRadius: "20px",
      }}
    >
      <img
        src={src}
        className="card-img-top"
        alt="card"
        style={{ borderRadius: "10px", marginBottom: "15px" }}
      />
      <div
        className="card-body"
        style={{ fontFamily: "Outfit", textAlign: "center" }}
      >
        <h1
          className="card-title"
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "hsl(218, 44%, 22%)",
            marginBottom: "15px",
          }}
        >
          {title}
        </h1>
        <p
          className="card-text"
          style={{
            fontSize: "15px",
            fontWeight: 400,
            color: "hsl(220, 15%, 55%)",
            marginBottom: "10px",
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Card;

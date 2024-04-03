import qrCodeImage from "./assets/images/image-qr-code.png";
import Card from "./components/Card";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <div>
        <Card
          width="320px"
          src={qrCodeImage}
          title="Improve your front-end skills by building projects"
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Card>
      </div>
    </div>
  );
};

export default App;

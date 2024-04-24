import qrCodeImage from "./assets/images/image-qr-code.png";
import Card from "./components/Card";
import "./App.css";
const App = () => {
  return (
    <>
      <main>
        <div className="container">
          <div>
            <Card
              width="320px"
              src={qrCodeImage}
              title="Improve your front-end skills by building projects"
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Card>
          </div>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/ArinzeGit" target="_blank">
            Arinze Owoh
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default App;

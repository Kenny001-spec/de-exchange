import "./Home.css";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>


      <div className="context">

      <div className="heroBox">
        <div className="heroText">
          <h1>
            {" "}
            <span>DLTCOIN</span> PROTOCOL
          </h1>
          <p>
            Swap, earn, and build on the leading decentralized crypto trading
            protocol.
          </p>
        </div>
        <div className="iconBox">
          <FaDiscord />
          <FaGithub />
          <FaTwitter />
        </div>
      </div>

      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Home;

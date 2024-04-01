/* eslint-disable react/prop-types */
import { IoLogoBitcoin } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import he from "he";
import "./index.css";

const CryptoCard = ({ symbol = "$", rate = "0", desc = "" }) => {
  return (
    <div className="cryptoCard">
      <div className="heading">
        <div className="crypto-logo">
          <IoLogoBitcoin />
        </div>
        <div className="cred">BTC</div>
      </div>
      {/* <div className="name">Bitcoin Tokken</div> */}
      <div className="name">{desc}</div>
      <div className="pricing">
        <div className="price">
          {rate} {he.decode(symbol)}{" "}
        </div>
        <div className="trend">
          +11.01% <FaArrowTrendUp />
        </div>
      </div>
      <div className="cardFooter">
        <IoMdInformationCircleOutline className="info" />
        <div className="tradeBtn">Trade</div>
      </div>
    </div>
  );
};

export default CryptoCard;

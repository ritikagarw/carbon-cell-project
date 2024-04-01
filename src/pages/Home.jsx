import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import Graph from "../components/Graph";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json", {
        responseType: "json",
      })
      .then((response) => {
        setData(Object.values(response.data.bpi));
      });
  }, []);

  return (
    <div className="home">
      <div className="welcome">
        <div>
          <span>Hello, </span>
          <span>Brooklyn Simmons </span>
          <span>👋</span>
        </div>
        <div>
          <span>Welcome to </span>
          <span>Spot trading!</span>
        </div>
      </div>
      <div className="graphContainer">
        <p className="graphHeader">Population Chart</p>
        <Graph />
      </div>

      <div className="cryptoContainer">
        <p className="cryptoHeader">Crypto Prices</p>
        <div className="cryptoCards">
          {data?.map((data) => (
            <CryptoCard
              key={data.code}
              symbol={data.symbol}
              rate={data.rate}
              desc={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

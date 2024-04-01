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
    <div className="title">
      <Graph />

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
  );
};

export default Home;

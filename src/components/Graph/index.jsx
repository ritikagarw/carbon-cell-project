import { useState, useEffect } from "react";
import { LineChart } from "react-chartkick";
import "chartkick/chart.js";
import axios from "axios";
import "./index.css";

const Graph = () => {
  const [data, setData] = useState([]);
  const [populationData, setPopulationData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
        {
          responseType: "json",
        }
      )
      .then((response) => {
        setData(response.data.data);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setPopulationData(
        data.reduce((acc, obj) => {
          acc[obj.Year] = +obj.Population / 10000000;
          return acc;
        }, {})
      );
    }
  }, [data]);

  return (
    <div>
      <LineChart
        id="chart"
        label={data[0]?.Nation}
        data={populationData}
        colors={["#2AB32A", "#fffff"]}
        xtitle="Year"
        ytitle="Population (in crores)"
        loading="Loading..."
        empty="No data"
        legend={true}
        library={{ backgroundColor: "#fffff" }}
      />
    </div>
  );
};

export default Graph;

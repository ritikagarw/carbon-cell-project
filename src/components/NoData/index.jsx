import NoDataImg from "../../assets/no-data.png";
import "./index.css";

const  NoData= () => {
  return (
    <div className="title">
      <img className="noData" src={NoDataImg} alt="No data" />
    </div>
  );
};

export default NoData;

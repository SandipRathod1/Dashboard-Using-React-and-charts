import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./likelihood.scss";
import Widget from "../../components/widget/Widget";
import LikelihoodChart from "../../components/chart/LikelihoodChart";

const Intensity = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={450}/>
          <Widget type="order" size={1560}/>
          <Widget type="earning" size={1800}/>
          <Widget type="balance" size={1500}/>
        </div>
        <div className="charts">
          <LikelihoodChart/>
        </div>
      </div>
    </div>
  );
};

export default Intensity;

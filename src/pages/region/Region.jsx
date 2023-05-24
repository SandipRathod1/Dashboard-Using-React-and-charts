import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./region.scss";
import Widget from "../../components/widget/Widget";
import RegionChart from "../../components/chart/RegionChart";

const Region = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={1335}/>
          <Widget type="order" size={1800}/>
          <Widget type="earning" size={2500}/>
          <Widget type="balance" size={1520}/>
        </div>
        <div className="charts">
          <RegionChart/>
        </div>
      </div>
    </div>
  );
};

export default Region;

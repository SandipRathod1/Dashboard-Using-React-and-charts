import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./intensity.scss";
import Widget from "../../components/widget/Widget";
import IntensityChart from "../../components/chart/IntensityChart";

const Intensity = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={1320}/>
          <Widget type="order" size={1400}/>
          <Widget type="earning" size={1203}/>
          <Widget type="balance" size={1123}/>
        </div>
        <div className="charts">
          <IntensityChart/>
        </div>
      </div>
    </div>
  );
};

export default Intensity;

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./topics.scss";
import Widget from "../../components/widget/Widget";
import IntensityChart from "../../components/chart/IntensityChart";

const Topics = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={4200}/>
          <Widget type="order" size={5200}/>
          <Widget type="earning" size={1200}/>
          <Widget type="balance" size={4200}/>
        </div>
        <div className="charts">
          <IntensityChart/>
        </div>
      </div>
    </div>
  );
};

export default Topics;

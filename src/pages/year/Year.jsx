import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./year.scss";
import Widget from "../../components/widget/Widget";
import YearChart from "../../components/chart/YearChart";

const Year = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={1350}/>
          <Widget type="order" size={1250}/>
          <Widget type="earning" size={5350}/>
          <Widget type="balance" size={1350}/>
        </div>
        <div className="charts">
          <YearChart/>
        </div>
      </div>
    </div>
  );
};

export default Year;

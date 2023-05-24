import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./city.scss";
import Widget from "../../components/widget/Widget";
import CityChart from "../../components/chart/CityChart";

const City = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={1300}/>
          <Widget type="order" size={1200}/>
          <Widget type="earning" size={1100}/>
          <Widget type="balance" size={1000}/>
        </div>
        <div className="charts">
          <CityChart/>
        </div>
      </div>
    </div>
  );
};

export default City;

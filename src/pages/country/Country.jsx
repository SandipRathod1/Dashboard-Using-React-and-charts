import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./country.scss";
import Widget from "../../components/widget/Widget";
import CountryChart from "../../components/chart/CountryChart";

const Country = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="user" size={1400}/>
          <Widget type="order" size={900}/>
          <Widget type="earning" size={800}/>
          <Widget type="balance" size={300}/>
        </div>
        <div className="charts">
          <CountryChart/>
        </div>
      </div>
    </div>
  );
};

export default Country;

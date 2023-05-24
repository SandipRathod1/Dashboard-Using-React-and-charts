import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./relevance.scss";
import Widget from "../../components/widget/Widget";
import RelevanceChart from "../../components/chart/RelevanceChart";

const Relevance = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" size={2500}/>
          <Widget type="order" size={3300}/>
          <Widget type="earning" size={8300}/>
          <Widget type="balance" size={9300}/>
        </div>
        <div className="charts">
          <RelevanceChart/>
        </div>
      </div>
    </div>
  );
};

export default Relevance;

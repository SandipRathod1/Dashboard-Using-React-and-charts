import "./home.scss";
import Filter from "../../Filter";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeContainer">
          <Filter type={"city"} />
        </div>
      </div>
    </>
  );
};

export default Home;

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List listTitle="Continue to watch" />
      <List listTitle="Popular Movies" />
      <List listTitle="Popular Series" />
      <List listTitle="Animated Films" />
    </div>
  );
};

export default Home;

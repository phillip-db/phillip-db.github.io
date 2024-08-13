import Jumbotron from "../components/Jumbotron";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <div className="card-container">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
};

export default Home;

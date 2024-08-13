import Jumbotron from "../components/Jumbotron";
import InfoCard from "../components/InfoCard";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="card-container">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </>
  );
};

export default Home;

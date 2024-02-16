import './App.css';
import Discover from './Components/Discover/Discover';
import Explore from './Components/Explore/Explore';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import PotteryClub from './Components/PotteryClub/PotteryClub';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Explore />
      <PotteryClub />
      <Discover />
    </div>
  );
}

export default App;

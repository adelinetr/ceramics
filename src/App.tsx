import './App.css';
import Discover from './Components/Discover/Discover';
import Explore from './Components/Explore/Explore';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import PotteryClub from './Components/PotteryClub/PotteryClub';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Explore />
      <PotteryClub />
      <Discover />
      <Shop />
    </div>
  );
}

export default App;

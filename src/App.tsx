import './App.css';
import Discover from './Components/Discover/Discover';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Newsletter from './Components/Newsletter/Newsletter';
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
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

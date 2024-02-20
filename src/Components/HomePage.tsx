import Discover from './Discover/Discover';
import Explore from './Explore/Explore';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Newsletter from './Newsletter/Newsletter';
import PotteryClub from './PotteryClub/PotteryClub';
import Shop from './Shop/Shop';


export default function HomePage() {
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

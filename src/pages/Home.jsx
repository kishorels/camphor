import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Products from '../components/Products';

export default function Home() {
  return (
    <div className="page-fade-in">
      <Hero />
      <About />
      <Stats />
      <Products />
    </div>
  );
}

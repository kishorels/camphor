import About from '../components/About';
import Stats from '../components/Stats';

export default function AboutPage() {
  return (
    <div className="page-fade-in pt-navbar">
      <div className="page-header">
        <h1 className="page-title text-center">About Our Heritage</h1>
      </div>
      <About />
      <Stats />
    </div>
  );
}

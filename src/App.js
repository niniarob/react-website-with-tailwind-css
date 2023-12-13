import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
    </div>
  );
}

export default App;

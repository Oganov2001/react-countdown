import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="app">
      <Timer duration={1 * 24 * 60 * 60 * 1000}></Timer>
    </div>
  );
}

export default App;

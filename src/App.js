import logo from './logo.svg';
import Navigation from './customer/components/Navigation/Navigation';
import './App.css';
import HomePage from './customer/components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
     <HomePage />
      </div>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Nav/Home';
import Index from './pages/Index';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
     <Home/>
     <Index/>
     <ProductDetails/>
    </div>
  );
}

export default App;

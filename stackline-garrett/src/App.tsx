import { useEffect } from 'react';
import './App.css';
import ProductInfo from './components/ProductInfo';
import RetailSale from './components/RetailSale';
import Metrics from './components/Metrics';
import Header from './components/Header';

function App() {
  return (
    <div className='container1'>
      <Header />
      <div className='container2'>
        <ProductInfo />
        <div>
          <RetailSale />
          <Metrics />
        </div>
      </div>
    </div>
  );
}

export default App;

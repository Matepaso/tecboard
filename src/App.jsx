import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Layout/Dashboard';
import ProductList from './components/Layout/ProductList';
import ProductForm from './components/Layout/ProductForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Layout/Dashboard';
import ProductList from './components/Layout/ProductList';
import ProductForm from './components/Layout/ProductForm';
import ClientList from './components/Layout/ClientList';
import ClientForm from './components/Layout/ClientForm';
import { ThemeProvider } from './components/Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/client" element={<ClientList />} />
          <Route path="/client/new" element={<ClientForm />} />
        </Routes>
      </Router>


    </ThemeProvider>

  );
}

export default App;
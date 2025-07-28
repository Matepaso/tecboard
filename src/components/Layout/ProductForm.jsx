import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/useTheme';

export default function ProductForm() {
  const navigate = useNavigate();
  const { theme, toggleDarkMode } = useTheme();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  });

  const categories = [
    'Eletrônicos',
    'Roupas',
    'Alimentos',
    'Móveis',
    'Outros'
  ];

  const unidade = [
    'PC - PEÇA',
    'CX - CAIXA',
    'UN - UNIDADE',
    'KG - QUILOGRAMA',
    'MT - METRO'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Produto cadastrado com sucesso! (Simulação)');
    navigate('/products');
  };

  return (
    <div style={{
      backgroundColor: theme.contentBg,
      color: theme.textColor,
      border : theme.borderColor,
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        borderRadius: '10px',
        padding: '30px',
        backgroundColor: theme.sidebarBg,
        boxShadow: theme.boxShadow,
        width: '1200px',
        maxWidth: '1200px',
        margin: '20px auto',
        display: 'grid',

      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          borderBottom: '1px solid #eee',
          paddingBottom: '15px',
        }}>
          <h2 style={{ margin: 0 }}>Cadastrar Novo Produto</h2>
          <button
            onClick={() => navigate('/products')}
            style={{
              padding: '8px 16px',
              
              
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Voltar
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Nome do Produto
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Unidade Medida
            </label>
            <select
              name="unidade"
              value={product.unidade}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              <option value="">Selecione uma Unidade Medida</option>
              {unidade.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'flex-start', // Alinha os itens no topo
            gap: '220px',
            marginBottom: '20px',
            maxWidth: '800px'

            // Garante que o container ocupe toda a largura
          }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Categoria
              </label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                style={{
                  width: '200%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>


            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Preço Unitario(R$)
              </label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                step="0.01"
                style={{
                  width: '200%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>



          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Observação
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                minHeight: '100px',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Salvar Produto
          </button>
        </form>
      </div>


    </div>
  );
}
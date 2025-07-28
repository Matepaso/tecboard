import { useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/useTheme';

export default function ProductList() {
  const navigate = useNavigate();
  const { theme, toggleDarkMode } = useTheme();

  // Dados mockados - substitua por chamada API real em produção
  const products = [
    { id: 1, name: 'Produto A', price: 'R$ 99,90', category: 'Eletrônicos' },
    { id: 2, name: 'Produto B', price: 'R$ 149,90', category: 'Roupas' },
    { id: 3, name: 'Produto C', price: 'R$ 29,90', category: 'Alimentos' },
  ];

  return (
    <div style={{
      backgroundColor: theme.contentBg,
      color: theme.textColor,
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      
      <div style={{
        borderRadius: '10px',
        padding: '30px',
        backgroundColor: theme.sidebarBg,
        boxShadow: '0 2px 10px rgba(255, 248, 248, 0.1)',
        width: '1200px',
        maxWidth: '1400px',
        margin: '20px auto',
      }}>


        <div style={{

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          borderBottom: '1px solid #eee',
          paddingBottom: '15px',
        }}>

          <button
            onClick={() => navigate("/")} // Volta para a página anterior
            style={{
              padding: '8px 16px',
              backgroundColor: '#f5f6fa',
              color: '#7f8c8d',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>←</span> Voltar
          </button>

          <h2 style={{ margin: 0, color: theme.textColor }}>Lista de Produtos</h2>
          <button
            onClick={() => navigate('/products/new')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Novo Produto
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
          }}>
            <thead>
              <tr style={{
                backgroundColor: theme.sidebarBg,
                borderBottom: '1px solid #ddd',
              }}>
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Nome</th>
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Preço</th>
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Categoria</th>
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} style={{
                  borderBottom: '1px solid #eee',
                  ':hover': {
                    backgroundColor: '#f9f9f9',
                  },
                }}>
                  <td style={{ padding: '12px 15px' }}>{product.name}</td>
                  <td style={{ padding: '12px 15px' }}>{product.price}</td>
                  <td style={{ padding: '12px 15px' }}>{product.category}</td>
                  <td style={{ padding: '12px 15px' }}>
                    <button style={{
                      padding: '6px 12px',
                      backgroundColor: '#f5f6fa',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '8px',
                    }}>
                      Editar
                    </button>
                    <button style={{
                      padding: '6px 12px',
                      backgroundColor: '#fff5f5',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      color: '#e74c3c',
                    }}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


  );
}
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../Context/useTheme';

export default function ClientList() {
  const navigate = useNavigate();
  const { theme, toggleDarkMode } = useTheme();

  // Dados mockados - substitua por chamada API real em produção
  const client = [
    { id: 1, name: 'Maria Souza', tpPessoa: 'Fisica', cpf: '410.771.068-82' },
    { id: 2, name: 'Carlos Oliveira', tpPessoa: 'Fisica', cpf: '477.300.548-33' },
    { id: 3, name: 'Pedro Santos', tpPessoa: 'Juridica', cpf: '13.671.311/0001-24' },
  ];

  return (
    <div style={{
      backgroundColor: theme.contentBg,
      color: theme.textColor,
      border: theme.borderColor,
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        
        borderRadius: '10px',
        backgroundColor: theme.sidebarBg,
        padding: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width:'1200px',
        maxWidth: '1200px',
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
          <h2 style={{ margin: 0, color: '#2c3e50' }}>Lista de Cliente</h2>
          <button
            onClick={() => navigate('/client/new')}
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
            Novo Cliente
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
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Tipo Pessoa</th>
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>CPF/CNPJ</th>
                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {client.map(client => (
                <tr key={client.id} style={{
                  borderBottom: '1px solid #eee',
                  ':hover': {
                    backgroundColor: theme.sidebarBg,
                  },
                }}>
                  <td style={{ padding: '12px 15px' }}>{client.name}</td>
                  <td style={{ padding: '12px 15px' }}>{client.tpPessoa}</td>
                  <td style={{ padding: '12px 15px' }}>{client.cpf}</td>
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
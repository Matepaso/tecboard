import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const [openFinancial, setOpenFinancial] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dados de exemplo
  const metrics = [
    { title: 'Total de Vendas', value: 'R$ 12.345', change: '+12%', trend: 'up' },
    { title: 'Novos Clientes', value: '245', change: '+5%', trend: 'up' },
    { title: 'Taxa de Conversão', value: '3.2%', change: '-0.5%', trend: 'down' },
    { title: 'Tickets Médios', value: 'R$ 89,90', change: '+7%', trend: 'up' },
  ];

  const recentOrders = [
    { id: '#1234', customer: 'João Silva', date: '23/07/2023', amount: 'R$ 250,00', status: 'Entregue' },
    { id: '#1235', customer: 'Maria Souza', date: '22/07/2023', amount: 'R$ 189,90', status: 'Processando' },
    { id: '#1236', customer: 'Carlos Oliveira', date: '22/07/2023', amount: 'R$ 420,00', status: 'Enviado' },
    { id: '#1237', customer: 'Ana Costa', date: '21/07/2023', amount: 'R$ 156,75', status: 'Entregue' },
    { id: '#1238', customer: 'Pedro Santos', date: '20/07/2023', amount: 'R$ 320,50', status: 'Cancelado' },
  ];

  const financialSubmenu = [
    { name: 'Fluxo de Caixa', id: 'cashflow', action: () => navigate('/financial/cashflow') },
    { name: 'Faturas', id: 'invoices', action: () => navigate('/financial/invoices') },
    { name: 'Balanço', id: 'balance', action: () => navigate('/financial/balance') },
  ];

  const handleItemClick = (item) => {
    if (item.id === 'financial') {
      setOpenFinancial(!openFinancial); // Alterna o dropdown de Finanças
    } else if (item.action) {
      item.action();
    } else {
      setActiveTab(item.id);
      setOpenFinancial(false); // Fecha o dropdown se outro item for clicado
    }
  };
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* Sidebar */}
      <div style={{
        width: isSidebarOpen ? '250px' : '50px',
        backgroundColor: '#2c3e50',
        color: 'white',
        transition: 'width 0.3s ease',
        padding: '20px 10px',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: isSidebarOpen ? 'space-between' : 'center',
          alignItems: 'center',
          marginBottom: '30px',
        }}>
          {isSidebarOpen && <h2>Dashboard</h2>}
          <button
            onClick={toggleSidebar}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
            }}
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            {[
              { icon: '📊', name: 'Dashboard', id: 'dashboard' },
              { icon: '📦', name: 'Produtos', id: 'products', action: () => navigate('/products') },
              { icon: '🧑', name: 'Clientes', id: 'customers', action: () => navigate('/client') },
              { icon: '💰', name: 'Vendas', id: 'sales' },
              { icon: '💲', name: 'Financas', id: 'financial', hasDropdown: true },
              { icon: '📝', name: 'Relatórios', id: 'reports' },
              { icon: '⚙️', name: 'Configurações', id: 'settings' },
            ].map((item) => (
              <li key={item.id} style={{ marginBottom: '15px' }}>
                <button
                  onClick={() => {
                    if (item.id === 'financial') {
                      setOpenFinancial(!openFinancial);
                    } else if (item.action) {
                      item.action();
                    } else {
                      setActiveTab(item.id);
                      setOpenFinancial(false);
                    }
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    color: 'white',
                    background: activeTab === item.id ? '#34495e' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => activeTab !== item.id && (e.target.style.backgroundColor = '#34495e')}
                  onMouseLeave={(e) => activeTab !== item.id && (e.target.style.backgroundColor = 'transparent')}
                >
                  <span style={{ marginRight: isSidebarOpen ? '10px' : '0', fontSize: '20px' }}>{item.icon}</span>
                  {isSidebarOpen && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center'
                    }}>
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <span style={{ marginLeft: '10px' }}>
                          {openFinancial ? '▼' : '▶'}
                        </span>
                      )}
                    </div>
                  )}

                </button>
                {item.id === 'financial' && openFinancial && isSidebarOpen && (
                  <div style={{
                    marginLeft: '20px',
                    marginTop: '5px',
                    borderLeft: '2px solid #3d5166',
                    paddingLeft: '10px'
                  }}>
                    {financialSubmenu.map((subItem) => (
                      <div
                        key={subItem.id}
                        onClick={() => {
                          subItem.action();
                          setActiveTab('financial');
                        }}
                        style={{
                          padding: '8px 0',
                          cursor: 'pointer',
                          color: '#ecf0f1',
                          ':hover': {
                            color: '#3498db'
                          }
                        }}
                      >
                        {subItem.name}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div style={{
        flex: 1,
        padding: '20px',
        backgroundColor: '#f5f6fa',
        overflowY: 'auto',
      }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
        }}>
          <h1 style={{ color: '#2c3e50' }}>
            {activeTab === 'dashboard' && 'Visão Geral'}
            {activeTab === 'customers' && 'Clientes'}
            {activeTab === 'sales' && 'Vendas'}
            {activeTab === 'reports' && 'Relatórios'}
            {activeTab === 'settings' && 'Configurações'}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Pesquisar..."
                style={{
                  padding: '8px 15px 8px 35px',
                  borderRadius: '20px',
                  border: '1px solid #ddd',
                  outline: 'none',
                }}
              />
              <span style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}>🔍</span>
            </div>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
            }}>🔔</button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#3498db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>JS</div>
              {isSidebarOpen && <span>John Smith</span>}
            </div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <>
            {/* Cards de métricas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '30px',
            }}>
              {metrics.map((metric, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}>
                  <h3 style={{
                    marginTop: '0',
                    marginBottom: '10px',
                    color: '#7f8c8d',
                    fontSize: '14px',
                  }}>{metric.title}</h3>
                  <p style={{
                    margin: '0',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                  }}>{metric.value}</p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                    color: metric.trend === 'up' ? '#2ecc71' : '#e74c3c',
                  }}>
                    {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Gráfico (simulado) */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              marginBottom: '30px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#bdc3c7',
              border: '1px dashed #bdc3c7',
            }}>
              [Área do Gráfico]
            </div>

            {/* Tabela de pedidos recentes */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}>
              <h2 style={{
                marginTop: '0',
                color: '#2c3e50',
              }}>Pedidos Recentes</h2>

              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                }}>
                  <thead>
                    <tr style={{
                      borderBottom: '1px solid #ecf0f1',
                    }}>
                      <th style={{ textAlign: 'left', padding: '12px 15px', color: '#7f8c8d' }}>ID</th>
                      <th style={{ textAlign: 'left', padding: '12px 15px', color: '#7f8c8d' }}>Cliente</th>
                      <th style={{ textAlign: 'left', padding: '12px 15px', color: '#7f8c8d' }}>Data</th>
                      <th style={{ textAlign: 'left', padding: '12px 15px', color: '#7f8c8d' }}>Valor</th>
                      <th style={{ textAlign: 'left', padding: '12px 15px', color: '#7f8c8d' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr key={index} style={{
                        borderBottom: '1px solid #ecf0f1',
                        ':hover': {
                          backgroundColor: '#f5f6fa',
                        },
                      }}>
                        <td style={{ padding: '12px 15px' }}>{order.id}</td>
                        <td style={{ padding: '12px 15px' }}>{order.customer}</td>
                        <td style={{ padding: '12px 15px' }}>{order.date}</td>
                        <td style={{ padding: '12px 15px' }}>{order.amount}</td>
                        <td style={{ padding: '12px 15px' }}>
                          <span style={{
                            padding: '5px 10px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            backgroundColor:
                              order.status === 'Entregue' ? '#d4edda' :
                                order.status === 'Processando' ? '#fff3cd' :
                                  order.status === 'Enviado' ? '#cce5ff' :
                                    '#f8d7da',
                            color:
                              order.status === 'Entregue' ? '#155724' :
                                order.status === 'Processando' ? '#856404' :
                                  order.status === 'Enviado' ? '#004085' :
                                    '#721c24',
                          }}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}



        {activeTab === 'customers' && (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center',
            color: '#7f8c8d',
          }}>
            <h2>Página de Clientes</h2>
            <p>Aqui você gerenciaria seus clientes</p>
          </div>
        )}

        {/* Outras páginas teriam conteúdo similar */}
      </div>
    </div>
  );
}

export default Dashboard;
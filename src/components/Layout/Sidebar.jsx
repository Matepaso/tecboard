import { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
    }}>
      {/* Sidebar */}
      <div style={{
        width: isOpen ? '250px' : '50px',
        backgroundColor: '#2c3e50',
        color: 'white',
        transition: 'width 0.3s ease',
        padding: '20px 10px',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: isOpen ? 'space-between' : 'center',
          alignItems: 'center',
          marginBottom: '30px',
        }}>
          {isOpen && <h2>Menu</h2>}
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
            {isOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            {['Início', 'Perfil', 'Mensagens', 'Configurações', 'Ajuda'].map((item) => (
              <li key={item} style={{
                marginBottom: '15px',
              }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <span style={{ marginRight: isOpen ? '10px' : '0' }}>📌</span>
                  {isOpen && item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Conteúdo principal */}
      <div style={{
        flex: 1,
        padding: '20px',
        backgroundColor: '#ecf0f1',
      }}>
        <h1>Conteúdo Principal</h1>
        <p>Esta é a área de conteúdo. A sidebar pode ser aberta/fechada clicando no botão.</p>
      </div>
    </div>
  );
}

export default Sidebar;
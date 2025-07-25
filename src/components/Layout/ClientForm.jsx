import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientForm() {
    const navigate = useNavigate();
    const [client, setClient] = useState({
        name: '',
        CPF: '',
        tpPessoa: '',
        situacao: '',
        endereco: '',
        cidade: ''
    });

    const tpPessoa = [
        'Juridica',
        'Fisica'
    ];

    const situacao = [
        'Normal',
        'Inativa',
        'Restricao'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cliente cadastrado com sucesso! (Simulação)');
        navigate('/client');
    };

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            maxWidth: '800px',
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
                <h2 style={{ margin: 0, color: '#2c3e50' }}>Cadastrar Novo Cliente</h2>
                <button
                    onClick={() => navigate('/client')}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#f5f6fa',
                        color: '#7f8c8d',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Voltar
                </button>
            </div>

            <form onSubmit={handleSubmit}>
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
                            Nome
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={client.name}
                            onChange={handleChange}
                            style={{
                                width: '200%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            Tipo de pessoa
                        </label>
                        <select
                            name="tpPessoa"
                            value={client.tpPessoa}
                            onChange={handleChange}
                            style={{
                                width: '150%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                            }}
                        >
                            <option value="">Selecione um tipo de pessoa</option>
                            {tpPessoa.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                            CPF/CNPJ
                        </label>
                        <input
                            type="text"
                            name="CPF"
                            value={client.CPF}
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
                            Situacao
                        </label>
                        <select
                            name="situacao"
                            value={client.situacao}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                            }}
                        >
                            <option value="">Selecione uma Situcao</option>
                            {situacao.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>


                
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                        Endereco
                    </label>
                    <input
                        type="text"
                        name="endereco"
                        value={client.endereco}
                        onChange={handleChange}
                        step="0.01"
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
                        cidade
                    </label>
                    <input
                        type="text"
                        name="cidade"
                        value={client.cidade}
                        onChange={handleChange}
                        step="0.01"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
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
    );
}
// ClienteList.js
import React, { useState, useEffect } from 'react';
import API_BASE_URL from './api/config'; // Substitua pelo caminho correto

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [rotaOtimizada, setRotaOtimizada] = useState([]);
  const [modalAberta, setModalAberta] = useState(false);

  useEffect(() => {
    // Lógica para buscar clientes na API e definir o estado "clientes"
    fetch(`${API_BASE_URL}/clientes`)
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

  const calcularRotaOtimizada = () => {
    fetch(`${API_BASE_URL}/rota-otimizada`)
      .then(response => response.json())
      .then(data => {
        setRotaOtimizada(data);
        setModalAberta(true);
      })
      .catch(error => console.error('Erro ao calcular rota otimizada:', error));
  };

  return (
    <div>
    <h2>Lista de Clientes</h2>
    <label>
      Filtrar por nome:
      <input
        type="text"
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />
    </label>
    <ul>
      {clientes
        .filter(cliente => cliente.nome.toLowerCase().includes(filtro.toLowerCase()))
        .map(cliente => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email} - {cliente.telefone} - X: {cliente.coordenada_x}, Y: {cliente.coordenada_y}
          </li>
        ))}
    </ul>
    <button onClick={calcularRotaOtimizada}>Calcular Rota Otimizada</button>
          {/* Modal para exibir a rota otimizada */}
          {modalAberta && (
        <div className="modal">
          <button onClick={() => setModalAberta(false)}>Fechar Modal</button>
          <h3>Rota Otimizada</h3>
          <ul>
            {rotaOtimizada.map(cliente => (
              <li key={cliente.id}>
                Nome: {cliente.nome} ,X: {cliente.coordenada_x}, Y: {cliente.coordenada_y}
              </li>
            ))}
          </ul>
        </div>
      )}
  </div>
  );
};

export default ClienteList;

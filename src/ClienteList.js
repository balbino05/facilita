// ClienteList.js
import React, { useState, useEffect } from 'react';
import API_BASE_URL from './api/config'; // Substitua pelo caminho correto

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    // Lógica para buscar clientes na API e definir o estado "clientes"
    fetch(`${API_BASE_URL}/clientes`)
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

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
  </div>
  );
};

export default ClienteList;

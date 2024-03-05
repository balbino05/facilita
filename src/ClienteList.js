// ClienteList.js
import React, { useState, useEffect } from 'react';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState('');


  useEffect(() => {
    // Lógica para buscar clientes na API e definir o estado "clientes"
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
            {cliente.nome} - {cliente.email} - {cliente.telefone}
          </li>
        ))}
    </ul>
  </div>
  );
};

export default ClienteList;

// ClienteForm.js
import React, { useState } from 'react';

const ClienteForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState('');
  const [coordenadaY, setCoordenadaY] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário para a API
  };

  return (
    <div>
      <h2>Formulário de Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />
        </label>
        <label>
          Coordenada X:
          <input type="number" value={coordenadaX} onChange={e => setCoordenadaX(e.target.value)} />
        </label>
        <label>
          Coordenada Y:
          <input type="number" value={coordenadaY} onChange={e => setCoordenadaY(e.target.value)} />
        </label>
        <button type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

export default ClienteForm;

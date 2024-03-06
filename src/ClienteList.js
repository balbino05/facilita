// ClienteList.js
import React, { useState, useEffect } from 'react';
import API_BASE_URL from './api/config'; // Substitua pelo caminho correto
import {Row, Col } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  Button } from '@mui/material';

// Define um tema personalizado do Material Design
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Cor principal para botões e elementos de destaque
    },
    secondary: {
      main: '#4d4949', // Cor secundária para botões de ação secundária
    },
  },
});

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
    <ThemeProvider theme={theme}>
    <div>
    <h1>Lista de Clientes</h1>
    <label>
      Filtrar por nome:
      <input
        type="text"
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />
    </label>
    <Row>
      {clientes
        .filter(cliente => cliente.nome.toLowerCase().includes(filtro.toLowerCase()))
        .map(cliente => (
          <Col key={cliente.id} xs={12} md={6} lg={4}>
            <div className="cliente-card">
              <h2>Nome: {cliente.nome}</h2>
              <p>Email: {cliente.email}</p>
              <p>Telefone: {cliente.telefone}</p>
              <p>Coordenada X: {cliente.coordenada_x}</p>
              <p>Coordenada Y: {cliente.coordenada_y}</p>
              {/* Adicionar mais informações, como coordenadas, se necessário */}
            </div>
          </Col>
        ))}
    </Row>
    <Button variant="primary" onClick={calcularRotaOtimizada}>Calcular Rota Otimizada</Button>
          {/* Modal para exibir a rota otimizada */}
          {modalAberta && (
        <div className="modal">
          <Button onClick={() => setModalAberta(false)}>Fechar Modal</Button>
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
  </ThemeProvider>
  );
};

export default ClienteList;

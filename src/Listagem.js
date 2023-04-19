import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import AdicionarVendedor from './componentes/AdicionarVendedor';
import Login from './services/loginApi';

const Listagem = () => {
  const [vendedores, setVendedores] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const fetchVendedores = async () => {
    try {
      const response = await Login.vendedor();
      setVendedores(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVendedores();
  }, page, search);

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>idEmpresa</th>
            <th>criadoEm</th>
            <th>atualizadoEm</th>
          </tr>
        </thead>
        <tbody>
          {vendedores.map((vendedor) => (
            <tr key={vendedor.id}>
              <td>{vendedor.id}</td>
              <td>{vendedor.nome}</td>
              <td>{vendedor.cnpj}</td>
              <td>{vendedor.idEmpresa}</td>
              <td>{vendedor.criadoEm}</td>
              <td>{vendedor.atualizadoEm}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => setPage(page - 1)}>Anterior</Button>
      <Button onClick={() => setPage(page + 1)}>Próximo</Button>
      <div>
      <AdicionarVendedor/>
      
    </div>
    </div>
  );
}

export default Listagem;
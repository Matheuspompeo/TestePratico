import React, { useState } from 'react';

function AdicionarVendedorForm ({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
        nome: nome,
        cnpj: cnpj,
        idEmpresa: 1,
        criadoEm:"2023-03-08T14:02:06.757Z",
        atualizadoEm:"2023-03-08T14:02:06.757Z",
      };
      const novoVendedor = obj;
      onSubmit(novoVendedor);
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="string" value={nome} onChange={(event) => setNome(event.target.value)} />
          </label>
          <label>
            CNPJ:
            <input type="string" value={cnpj} onChange={(event) => setCnpj(event.target.value)} />
          </label>
          <button type="submit">Adicionar Vendedor</button>
        </form>
      );
}
export default AdicionarVendedorForm;
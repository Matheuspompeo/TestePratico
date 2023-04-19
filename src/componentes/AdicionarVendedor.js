import { useState } from 'react';
import AdicionarVendedorForm from './Vendedor';

function AdicionarVendedor() {
  const [resultado, setResultado] = useState('');

  const handleSubmit = async (novoVendedor) => {
    const response = await fetch('https://m2devadmin.softkuka.com.br/api/Vendedor', {
      method: 'POST',
      body: JSON.stringify({
        idEmpresa: 1,
        ...novoVendedor,
      }),
    });

    if (response.ok) {
      setResultado('Vendedor adicionado com sucesso!');
    } else {
      setResultado('Erro ao adicionar vendedor');
    }
  };

  return (
    <div>
      <h2>Formulário para adicionar um novo vendedor:</h2>
      <AdicionarVendedorForm onSubmit={handleSubmit} />
      {resultado && <p>{resultado}</p>}
    </div>
  );
}
export default AdicionarVendedor;
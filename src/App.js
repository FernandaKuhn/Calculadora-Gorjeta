
import { useState } from 'react';
import './styles.css'

function App() {

  const [conta, setConta] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [resultado, setResultado] = useState(0);
  const calcular = () => {
    let calculo = Number(conta) * Number(porcentagem) / 100;
    setResultado(calculo);

  }


  return (
    <div className='container'>
      <img src='https://cdn.pixabay.com/photo/2014/04/02/17/08/waitress-308078_1280.png' alt='personagem' />
      <div>
        <h1>Calculadora de Gorjeta</h1>
        <h2> Digite o valor da conta</h2>
        <input className='valor' placeholder='ex: 30' onChange={(txt) => setConta(txt.target.value)} />

        <h2>Selecione a porcentagem da gorjeta</h2>
        <select className='porcentagem' onChange={(txt) => setPorcentagem(txt.target.value)}>
          <option>Selecione</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
        </select>
        <br />
        <br />
        <br />
        <button onClick={calcular}>Calcular</button>

        {resultado === 0 ? null : <h2>Resultado: {resultado}</h2>}
      </div>
    </div>
  );
}

export default App;

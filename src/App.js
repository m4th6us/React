import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Matheus'
  const upper_name = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <header className="App-header">
          <h1>Olá marilene</h1>
          <h2>Adicionando variaveis</h2>
          <p>Olá meu nome é: {upper_name} </p>
          <p>Soma: {sum(1, 2)}</p>
          <img src={url} alt='my image' />
      </header>
      <HelloWorld/>
    </div>
  );
}

export default App;

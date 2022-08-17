import Header from '../../components/Header';
import Tabela from '../../components/Tabela';
import './styles.css';

function Main() {
  return (
    <div className='container-main'>
      <Header />

      <main>
        <button className='btn-green'>Adicionar</button>

        <Tabela />
      </main>
    </div>
  );
}

export default Main;

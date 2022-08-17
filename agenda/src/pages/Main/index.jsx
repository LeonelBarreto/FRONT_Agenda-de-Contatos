import { useState } from 'react';
import AddContatoModal from '../../components/AddContatoModal';
import Header from '../../components/Header';
import Tabela from '../../components/Tabela';
import './styles.css';

function Main() {

  const [openAdd, setOpenAdd] = useState();
  
  return (
    <div className='container-main'>
      <Header />

      <main>
        <button className='btn-green' onClick={() => setOpenAdd(true)}>Adicionar</button>

        <Tabela />
      </main>

      <AddContatoModal open={openAdd} handleClose={() => setOpenAdd(false)} />
      
    </div>
  );
}

export default Main;

import './styles.css';
import FecharIcone from '../../assets/fechar.svg';
import { useState } from 'react';

function AddContatoModal({ open, handleClose }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    function handleClear() {
        setNome('');
        setEmail('');
        setTelefone('');
    };

    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal modal-adicionar'>
                        <img src={FecharIcone} alt="fechar" className='fechar-icone' onClick={handleClose} />
                        <h2>Novo contato</h2>

                        <form className='form-add'>
                            <input type="text" placeholder='Nome' onChange={(e) => setNome(e.target.value)} value={nome} />
                            <input type="text" placeholder='E-mail'onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="text" placeholder='Telefone'onChange={(e) => setTelefone(e.target.value)} value={telefone} />
                        </form>

                        <div className='container-btn'>
                            <button className='btn-green btn-confirmar'>Adicionar</button>
                            <button className='btn-red btn-cancelar' onClick={handleClear}>Limpar</button>
                        </div>
                    </div>
                </div>
            };
        </>
    );
};

export default AddContatoModal;
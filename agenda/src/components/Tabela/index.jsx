import './styles.css';
import EditarIcone from '../../assets/editar.svg';
import DeletarIcone from '../../assets/deletar.svg';
import ConfirmarModal from '../ConfirmarModal';
import { useState } from 'react';

function Tabela() {

    const [open, setOpen] = useState();

    function handleClose() {
        setOpen(false);
    };

    function handleConfirm() {
        setOpen(false);
    };

    function handleDeleteContact(contact) {
        setOpen(true);
    };

    return (
        <div className='container-tabela'>
            <div className='tabela-header'>
                <strong>Nome</strong>
                <strong>Email</strong>
                <strong>Telefone</strong>
                <div></div>
            </div>

            <div className='tabela-body'>
                <div className='tabela-line'>
                    <span>Leonel</span>
                    <span>leonel@email.com</span>
                    <span>(71) 99999-9999</span>
                    <div className='container-botoes'>
                        <img src={EditarIcone} alt="editar" />
                        <img src={DeletarIcone} alt="deletar" onClick={() => handleDeleteContact(1)}/>
                    </div>
                </div>
            </div>

            <ConfirmarModal 
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
                titulo='Confirma exclusão?'
                subtitulo='Deseja excluir o contato Daniel Lopes?'
                textoBotaoCancelar="Cancelar"
                textoBotaoConfirmar='Excluir'
            />
        </div>
    )
}

export default Tabela;
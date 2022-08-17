import './styles.css';
import EditarIcone from '../../assets/editar.svg';
import DeletarIcone from '../../assets/deletar.svg';
import ConfirmarModal from '../ConfirmarModal';
import { useState } from 'react';
import EditarContatoModal from '../EditarContatoModal';

function Tabela() {

    const [openDelete, setOpenDelete] = useState();
    const [openEdit, setOpenEdit] = useState();

    function handleCloseDelete() {
        setOpenDelete(false);
    };
    
    function handleConfirmDelete() {
        setOpenDelete(false);
    };

    function handleDeleteContact(contact) {
        setOpenDelete(true);
    }

    function handleEditContact(contact) {
        setOpenEdit(true);
    }
    
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
                        <img src={EditarIcone} alt="editar" onClick={() => handleEditContact(1)} />
                        <img src={DeletarIcone} alt="deletar" onClick={() => handleDeleteContact(1)} />
                    </div>
                </div>
            </div>

            <ConfirmarModal
                open={openDelete}
                handleClose={handleCloseDelete}
                handleConfirm={handleConfirmDelete}
                titulo='Confirma a exclusão?'
                subtitulo= 'Deseja excluir o contato Daniel Lopes?'
                textoBtnConfirmar='Excluir'
                textoBtnCancelar='Cancelar'
            />

            <EditarContatoModal open={openEdit} handleClose={() => setOpenEdit(false)} />
        </div>
    )
}

export default Tabela;
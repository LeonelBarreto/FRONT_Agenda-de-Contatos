import './styles.css';
import FecharIcone from '../../assets/fechar.svg';

function ConfirmarModal({ open, handleClose, handleConfirm, titulo, subtitulo, textoBtnConfirmar, textoBtnCancelar }) {
    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal modal-confirmar'>
                        <img src={FecharIcone} alt="fechar" className='fechar-icone' onClick={handleClose} />
                        <h1>{titulo}</h1>
                        <span>{subtitulo}</span>

                        <div className='container-btn'>
                            <button className='btn-green btn-confirmar' onClick={handleConfirm}>{textoBtnConfirmar}</button>
                            <button className='btn-red btn-cancelar' onClick={handleClose}>{textoBtnCancelar}</button>
                        </div>
                    </div>
                </div>
            };
        </>
    );
};

export default ConfirmarModal;
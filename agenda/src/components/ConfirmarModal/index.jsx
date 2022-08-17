import './styles.css';

function ConfirmarModal(open, handleClose, handleConfirm, titulo, subtitulo, textoBotaoCancelar, textoBotaoConfirmar) {

    


    return (
        <div className='backdrop'>
            <div className='modal'>
                <h1>{titulo}</h1>
                <span>{subtitulo}</span>

                <button className='btn-green'>{textoBotaoConfirmar}</button>
                <button className='btn-red'>{textoBotaoCancelar}</button>

            </div>
        </div>
    );
};

export default ConfirmarModal;
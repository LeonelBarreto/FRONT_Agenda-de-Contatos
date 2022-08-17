import './styles.css';
import BackgroundCadastro from '../../assets/background-cadastro.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    return (
        <div className='container-cadastro'>

            <div className='left-cadastro'>
                <h3>Cadastre-se!</h3>

                <form>
                    <input type="text" placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <button className='btn-green' type='submit'>Cadastrar</button>
                    <button className='btn-red' type='button'>Cancelar</button>
                </form>
                <span>Já tem cadastro? <Link to='/'>Clique aqui!</Link></span>
            </div>
            <img src={BackgroundCadastro} alt="background" />
        </div>
    );
};

export default Cadastro;
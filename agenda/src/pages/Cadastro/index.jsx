import './styles.css';
import BackgroundCadastro from '../../assets/background-cadastro.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function Cadastro() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!nome || !email || !senha) {
                return;
            };

            const response = await api.post('/usuarios', {
                nome,
                email,
                senha
            });

            if (response.status > 204) {
                return;
            };

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container-cadastro'>

            <div className='left-cadastro'>
                <h3>Cadastre-se!</h3>

                <form onSubmit={handleSubmit}>
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
import './styles.css';
import BackgroundLogin from '../../assets/background-login.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', {
                email,
                senha
            });

            if (response.status > 204) {
                return;
            };

            console.log(response.data);
            navigate('/main');
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <div className='container-login'>
            <img src={BackgroundLogin} alt="background" />

            <div className='right-login'>
                <span>Bem-vindo!</span>
                <h1>Faça o login com sua conta</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <button className='btn-green' type='submit'>Entrar</button>
                </form>
                <span>Não tem cadastro? <Link to='/cadastro'>Clique aqui!</Link></span>
            </div>
        </div>
    );
};

export default Login;
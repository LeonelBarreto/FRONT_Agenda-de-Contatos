import './styles.css';
import BackgroundLogin from '../../assets/background-login.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container-login'>
            <img src={BackgroundLogin} alt="background" />

            <div className='right-login'>
                <span>Bem-vindo!</span>
                <h1>Faça o login com sua conta</h1>

                <form>
                    <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className='btn-green' type='submit'>Entrar</button>
                </form>
                <span>Não tem cadastro? <Link to='/cadastro'>Clique aqui!</Link></span>
            </div>
        </div>
    );
};

export default Login;
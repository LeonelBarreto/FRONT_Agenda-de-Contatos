import './styles.css';
import Logo from '../../assets/logo.svg';
import DesconectarIcone from '../../assets/logout.svg';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    function handleLogout() {
        navigate('/');
    }
    
    return (
        <header>
            <div></div>
            <img src={Logo} alt="logo" className='logo'/>
            <img src={DesconectarIcone} alt="logout" className='desconectar'onClick={handleLogout}/>
        </header>
    );
};

export default Header;
import './styles.css';
import Logo from '../../assets/logo.svg';
import DesconectarIcone from '../../assets/logout.svg';

function Header() {
    return (
        <header>
            <div></div>
            <img src={Logo} alt="logo" className='logo'/>
            <img src={DesconectarIcone} alt="logout" className='desconectar'/>
        </header>
    );
};

export default Header;
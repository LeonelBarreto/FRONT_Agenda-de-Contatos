import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/main' element={<Main />} />
        </Routes>
    );
};

export default MainRoutes;
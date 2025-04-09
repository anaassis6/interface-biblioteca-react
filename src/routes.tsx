import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './appConfig';
import PHome from './pages/PHome/PHome';
import PLogin from './pages/PLogin/PLogin';
import PAluno from './pages/PAluno/PAluno';
import PLivro from './pages/PLivro/PLivro';
import PEmprestimo from './pages/PEmprestimo/PEmprestimo';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome />}></Route>
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin />}></Route>
                <Route path={APP_ROUTES.ROUTE_ALUNO} element={<PAluno />}></Route>
                <Route path={APP_ROUTES.ROUTE_LIVRO} element={<PLivro />}></Route>
                <Route path={APP_ROUTES.ROUTE_EMPRESTIMO} element={<PEmprestimo />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
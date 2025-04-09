import { JSX } from 'react';
import estilo from './Cabecalho.module.css';
import logotipo from '../../assets/logotipo.png';
import { APP_ROUTES } from '../../appConfig';

function Cabecalho(): JSX.Element{
    return (
        <header className={estilo.cabecalho}>
            <a href={APP_ROUTES.ROUTE_HOME}
                className={estilo.imgLogo}>
                <img src={logotipo} alt="logotipo" />
            </a>
            <a href={APP_ROUTES.ROUTE_LISTA_ALUNO}>Alunos</a>
            <a href={APP_ROUTES.ROUTE_LISTA_LIVRO}>Livros</a>
            <a href={APP_ROUTES.ROUTE_LISTA_EMPRESTIMO}>Empréstimos</a>
            <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
        </header>
    );
}

export default Cabecalho;
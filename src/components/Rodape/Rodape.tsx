import { JSX } from 'react';
import estilo from './Rodape.module.css';

function Rodape(): JSX.Element {
    return (
        <footer className={estilo.rodape}>
            <p>Desenvolvido por: Ana Luiza</p>
            <p>Copyright</p>
        </footer>
    );
}

export default Rodape;
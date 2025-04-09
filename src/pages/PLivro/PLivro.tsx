import { JSX } from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import TabelaLivro from "../../components/Tabelas/TabelaLivro/TabelaLivro";
import Rodape from "../../components/Rodape/Rodape";

function PLivro(): JSX.Element {
    return (
        <div className="pagina-grid">
            <Cabecalho />

            <TabelaLivro />

            <Rodape />
        </div>
    );
}

export default PLivro;
import { JSX } from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import TabelaAluno from "../../components/Tabelas/TabelaAluno/TabelaAluno";
import Rodape from "../../components/Rodape/Rodape";

function PAluno(): JSX.Element {
    return (
        <div className="pagina-grid">
            <Cabecalho />

            <TabelaAluno />

            <Rodape />
        </div>
    );
}

export default PAluno;
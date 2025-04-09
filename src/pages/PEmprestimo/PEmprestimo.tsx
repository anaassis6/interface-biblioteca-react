import { JSX } from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";
import Rodape from "../../components/Rodape/Rodape";

function PEmprestimo(): JSX.Element {
    return (
        <div className="pagina-grid">
            <Cabecalho />

            <TabelaEmprestimo />

            <Rodape />
        </div>
    );
}

export default PEmprestimo;
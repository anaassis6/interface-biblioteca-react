import { JSX } from "react";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Welcome from "../../components/Welcome/Welcome";
import Rodape from "../../components/Rodape/Rodape";

function PHome(): JSX.Element {
    return (
        <>
            <Cabecalho />
            <Welcome/>
            <Rodape />
        </>
    );
}

export default PHome;
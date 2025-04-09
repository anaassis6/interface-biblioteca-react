import Cabecalho from "../../components/Cabecalho/Cabecalho";
import LoginForm from "../../components/LoginForm/LoginForm";
import Rodape from "../../components/Rodape/Rodape";

function PLogin() {
    return (
        <div className="pagina-grid">
            <Cabecalho />

            <LoginForm />

            <Rodape />
        </div>
    );
}

export default PLogin;
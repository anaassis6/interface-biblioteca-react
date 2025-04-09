import { SERVER_CFG } from "../appConfig";
import EmprestimoDTO from "../intefaces/EmprestimoInterface";

class EmprestimoRequests {

    private serverURL: string;                  
    private routeListaEmprestimos: string;      
    private routeCadastraEmprestimo: string;    
    private routeAtualizaEmprestimo: string;    
    private routeRemoveEmprestimo: string;      

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;               
        this.routeListaEmprestimos = '/lista/emprestimos';    
        this.routeCadastraEmprestimo = '/novo/emprestimo';    
        this.routeAtualizaEmprestimo = '/atualiza/emprestimo';
        this.routeRemoveEmprestimo = '/remove/emprestimo';   
    }

    /**
     * Método assíncrono que faz uma requisição GET para a API buscando todos os empréstimos cadastrados.
     * @returns Um objeto JSON contendo a lista de empréstimos, ou null em caso de erro
     */
    async listarEmprestimos(): Promise<EmprestimoDTO | null> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaEmprestimos}`);
            if (respostaAPI.ok) {
                const listaDeEmprestimos: EmprestimoDTO = await respostaAPI.json();
                return listaDeEmprestimos;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao fazer a consulta de livros: ${error}`);
            return null;
        }
    }
}

export default new EmprestimoRequests();
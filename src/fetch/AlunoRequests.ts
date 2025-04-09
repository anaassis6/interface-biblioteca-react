import { SERVER_CFG } from '../appConfig';
import AlunoDTO from '../intefaces/AlunoInterface';

class AlunoRequests {

    private serverURL: string;          
    private routeListaAlunos: string;   
    private routeCadastraAluno: string; 
    private routeAtualizaAluno: string; 
    private routeRemoveAluno: string;   

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;     // Endereço do servidor web
        this.routeListaAlunos = '/lista/alunos';    // Rota configurada na API
        this.routeCadastraAluno = '/novo/aluno';    // Rota configurada na API
        this.routeAtualizaAluno = '/atualiza/aluno'; // Rota configurada na API
        this.routeRemoveAluno = '/remove/aluno';    // Rota configurada na API
    }

    /**
     * Método que faz uma requisição à API para buscar a lista de alunos cadastrados
     * @returns Retorna um JSON com a lista de alunos ou null em caso de erro
     */
    async listarAlunos(): Promise<AlunoDTO | null> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAlunos}`);
            if (respostaAPI.ok) {
                const listaDeAlunos: AlunoDTO = await respostaAPI.json();

                return listaDeAlunos;
            }
            
            return null;
        } catch (error) {
            console.error(`Erro ao fazer a consulta de alunos: ${error}`);

            return null;
        }
    }
}

export default new AlunoRequests();
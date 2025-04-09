import { SERVER_CFG } from "../appConfig";
import LivroDTO from "../intefaces/LivroInterface";

class LivroRequests {

    private serverURL: string;      
    private routeListaLivros: string;  
    private routeCadastraLivro: string; 
    private routeAtualizaLivro: string; 
    private routeRemoveLivro: string;   

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;        
        this.routeListaLivros = '/lista/livros';     
        this.routeCadastraLivro = '/novo/livro';       
        this.routeAtualizaLivro = '/atualiza/livro';    
        this.routeRemoveLivro = '/remove/livro';       
    }

    /**
     * Método que faz uma requisição à API para buscar a lista de livros cadastrados
     * @returns Retorna um JSON com a lista de livros ou null em caso de erro
     */
    async listarLivros(): Promise<LivroDTO | null> {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivros}`);
            if(respostaAPI.ok) {
                const listaDeLivros: LivroDTO = await respostaAPI.json();
                return listaDeLivros;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao fazer a consulta de livros: ${error}`);

            return null;
        }
    }
}

export default new LivroRequests();
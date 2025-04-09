import { JSX, useEffect, useState } from 'react'; 
import { DataTable } from 'primereact/datatable'; 
import { Column } from 'primereact/column'; 
import { Button } from 'primereact/button'; 
import LivroRequests from '../../../fetch/LivroRequests';
import estilo from './TabelaLivro.module.css';
import LivroDTO from '../../../intefaces/LivroInterface';

function TabelaLivro(): JSX.Element {
    const [livros, setLivros] = useState<LivroDTO[]>([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchLivros = async () => {   
            try {
                const listaDeLivros = await LivroRequests.listarLivros(); 
                setLivros(Array.isArray(listaDeLivros) ? listaDeLivros : []); 
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`); 
            }
        }

        fetchLivros();
    }, []); 

    return (
        <main>
            <h1 className={estilo['header-tabela-livro']}>Lista de Livros</h1>

            <DataTable
                value={livros} 
                paginator 
                rows={5} 
                rowsPerPageOptions={[5, 10, 25, 50]} 
                tableStyle={{ minWidth: '50rem' }} 
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" 
                currentPageReportTemplate="{first} de {last} total {totalRecords}" 
                paginatorLeft={paginatorLeft} 
                paginatorRight={paginatorRight} 
                className={estilo['data-table']} 
            >
                <Column field="titulo" header="Titulo" style={{ width: '20%' }} />
                <Column field="autor" header="Autor" style={{ width: '20%' }} />
                <Column field="editora" header="Editora" style={{ width: '15%' }} />
                <Column field="isbn" header="ISBN" style={{ width: '10%' }} />

                <Column
                    field="valorAquisicao"
                    header="Valor de Aquisição"
                    style={{ width: '10%' }}
                    body={(rowData) => {
                        const valor = Number(rowData.valorAquisicao);
                        return valor.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }); 
                    }}
                />
            </DataTable>
        </main>
    );
}

export default TabelaLivro;
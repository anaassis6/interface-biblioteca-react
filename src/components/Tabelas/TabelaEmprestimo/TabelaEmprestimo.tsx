import { JSX, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';
import estilo from './TabelaEmprestimo.module.css';
import EmprestimoDTO from '../../../intefaces/EmprestimoInterface';

function TabelaEmprestimo(): JSX.Element {
    const [emprestimos, setEmprestimos] = useState<EmprestimoDTO[]>([]);
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimos();
                setEmprestimos(Array.isArray(listaDeEmprestimos) ? listaDeEmprestimos : []);
            } catch (error) {
                console.error(`Erro ao buscar alunos: ${error}`); 
            }
        }

        fetchEmprestimos(); 
    }, []); 

    return (
        <main>
            <h1 className={estilo['header-tabela-emprestimo']}>Lista de Empréstimos</h1>

            <DataTable
                value={emprestimos} 
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
                <Column field="aluno.nome" header="Aluno" style={{ width: '10%' }} /> 
                <Column field="livro.titulo" header="Livro" />

                <Column
                    field="dataEmprestimo"
                    header="Data do emprétimo"
                    style={{ width: '15%' }}
                    body={(rowData) => {
                        const data = new Date(rowData.dataEmprestimo); 
                        const dia = String(data.getDate()).padStart(2, '0'); 
                        const mes = String(data.getMonth() + 1).padStart(2, '0'); 
                        const ano = data.getFullYear(); 
                        return `${dia}/${mes}/${ano}`; 
                    }}
                />
                <Column
                    field="dataDevolucao"
                    header="Data de devolução"
                    style={{ width: '15%' }}
                    body={(rowData) => {
                        const data = new Date(rowData.dataDevolucao); 
                        const dia = String(data.getDate()).padStart(2, '0'); 
                        const mes = String(data.getMonth() + 1).padStart(2, '0'); 
                        const ano = data.getFullYear(); 
                        return `${dia}/${mes}/${ano}`; 
                    }}
                />
                <Column field="statusEmprestimo" header="Status do empréstimo" style={{ width: '15%' }} />
            </DataTable>
        </main>
    );
}

export default TabelaEmprestimo; 
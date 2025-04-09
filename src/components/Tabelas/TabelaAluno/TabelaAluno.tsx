import { JSX, useEffect, useState } from 'react';
import AlunoRequests from '../../../fetch/AlunoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import estilo from './TabelaAluno.module.css';
import AlunoDTO from '../../../intefaces/AlunoInterface';



function TabelaAluno(): JSX.Element {
    const [alunos, setAlunos] = useState<AlunoDTO[]>([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos()
                setAlunos(Array.isArray(listaDeAlunos) ? listaDeAlunos : []);
            } catch (error) {
                console.error(`Erro ao buscar alunos:`, error);
            }
        };
        fetchAlunos();
    }, [alunos]);

    return (
        <main>
            <h1 className={estilo['header-tabela-aluno']}>Lista de Alunos</h1>

            <DataTable
                value={alunos} 
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
                <Column field="nome" header="Nome" style={{ width: '15%' }} />
                <Column field="sobrenome" header="Sobrenome" style={{ width: '15%' }} />
                <Column field="endereco" header="Endereço" style={{ width: '20%' }} />
                <Column field="email" header="E-mail" style={{ width: '20%' }} />

                <Column
                    field="dataNascimento"
                    header="Data Nascimento"
                    style={{ width: '15%' }}
                    body={(rowData) => {
                        const data = new Date(rowData.dataNascimento);
                        const dia = String(data.getDate()).padStart(2, '0');
                        const mes = String(data.getMonth() + 1).padStart(2, '0');
                        const ano = data.getFullYear();
                        return `${dia}/${mes}/${ano}`;
                    }}
                />

                <Column
                    field="celular"
                    header="Celular"
                    style={{ width: '15%' }}
                    body={(rowData) => {
                        const celular = rowData.celular?.replace(/\D/g, '');
                        if (!celular || celular.length < 10) return celular;
                        return celular.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
                    }}
                />
            </DataTable>
        </main>
    );
}

export default TabelaAluno;
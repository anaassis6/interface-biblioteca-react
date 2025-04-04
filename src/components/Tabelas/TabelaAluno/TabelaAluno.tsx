import { useEffect, useState } from 'react';
import AlunoRequests from '../../../fetch/AlunoRequests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';



function TabelaAluno() {
    const [alunos, setAlunos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    // Função para formatar data no formato DD/MM/AAAA
    const formatarData = (data: string) => {
        if (!data) return '';
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR');
    };


    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos()
                setAlunos(listaDeAlunos);
            } catch (error) {
                console.error(`Erro ao buscar alunos:`, error);
            }
        };
        fetchAlunos();
    }, [alunos]);

    return (
        <>
            <DataTable value={alunos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nome" header="Nome" style={{ width: '25%' }}></Column>
                <Column field="sobrenome" header="Sobrenome" style={{ width: '25%' }}></Column>
                <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
                <Column field="endereco" header="Endereço" style={{ width: '25%' }}></Column>
                <Column field="dataNascimento" header="Data de Nascimento" style={{ width: '25%' }} body={(rowData) => formatarData(rowData.dataNascimento)}></Column>
                <Column field="celular" header="Celular" style={{ width: '25%' }}></Column>
            </DataTable>
        </>
    )

}

export default TabelaAluno;
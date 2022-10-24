import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import { People } from "@/data/people";
import {useState} from "react";
import {Person} from "@/models/people";
import {Checkbox} from "@mui/material";

export const Home = () => {
    const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);
    const pageSizes = 5;
    const columns = [
        {
            field: 'actions',
            headerName: '',
            width: 50,
            renderCell: ( params: GridRenderCellParams ) => (
                <>
                    {/* !! = con esto transformamos la resolución de este metodo en un true o false */}
                    <Checkbox size="small" checked={ !!selectedPeople.find( p => p.id === params.row.id ) } />
                </>
            )
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: ( params: GridRenderCellParams ) => <>{ params.value }</>
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            minWidth: 150,
            renderCell: ( params: GridRenderCellParams ) => <>{ params.value }</>
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,
            minWidth: 150,
            renderCell: ( params: GridRenderCellParams ) => <>{ params.value }</>
        }
    ]

    return(
        <DataGrid
            columns={ columns }
            rows={ People }
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={ pageSizes }
            rowsPerPageOptions={ [pageSizes] }
            getRowId={ (row: any) => row.id }
        ></DataGrid>
    );
}


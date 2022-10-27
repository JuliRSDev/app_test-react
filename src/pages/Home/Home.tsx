import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from "@/data/people";
import { useState } from "react";
import { Person } from "@/models/people";
import { Checkbox } from "@mui/material";

export const Home = () => {
    const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);
    const pageSizes = 5;

    const findPerson = ( person: Person ) => !!selectedPeople.find( p => p.id === person.id );
    const filterPerson = ( person: Person ) => selectedPeople.filter( p => p.id !== person.id );

    const handleChange = ( person: Person ) => {
        setSelectedPeople( findPerson( person ) ? filterPerson( person ) : [ ...selectedPeople, person ] );
    }

    const columns = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: ( params: GridRenderCellParams ) => (
                <>
                    {/* !! = con esto transformamos la resolución de este metodo en un true o false */}
                    <Checkbox size="small"
                              checked={ findPerson( params.row ) }
                              onChange={ () => handleChange( params.row ) }
                    />
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


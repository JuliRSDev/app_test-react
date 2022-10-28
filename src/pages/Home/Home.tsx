import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from "@/data/people";
import { useEffect, useState } from "react";
import { Person } from "@/models/people";
import { Checkbox } from "@mui/material";
import { useDispatch } from 'react-redux'
import { addFavoritePeople } from "@/redux/state/favoritePeople";
import {addPeople} from "@/redux/state/people";
import {store} from "@/redux/store";

export const Home = () => {
    const dispatch = useDispatch();

    const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);
    const pageSizes = 5;

    const findPerson = ( person: Person ) => !!selectedPeople.find( p => p.id === person.id );
    const filterPerson = ( person: Person ) => selectedPeople.filter( p => p.id !== person.id );

    const handleChange = ( person: Person ) => {
        const filterPeople = findPerson( person ) ? filterPerson( person ) : [ ...selectedPeople, person ];
        setSelectedPeople( filterPeople );
        dispatch( addFavoritePeople( filterPeople ) );
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

    useEffect( () => {
        dispatch( addPeople( People ) );
    }, [] );

    return(
        <DataGrid
            columns={ columns }
            rows={ store.getState().people }
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={ pageSizes }
            rowsPerPageOptions={ [pageSizes] }
            getRowId={ (row: any) => row.id }
        ></DataGrid>
    );
}


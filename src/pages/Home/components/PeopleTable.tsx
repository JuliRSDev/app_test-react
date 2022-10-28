import {useDispatch, useSelector} from "react-redux";
import {AppStore} from "@/redux/store";
import {useState} from "react";
import {Person} from "@/models/people";
import {addFavoritePeople} from "@/redux/state/favoritePeople";
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
import {Checkbox} from "@mui/material";

export const PeopleTable = () => {

    const dispatch = useDispatch();
    const pageSizes = 5;

    const statePeople = useSelector( ( store: AppStore ) => store.people );
    const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);

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

    return(
        <DataGrid
            rows={ statePeople }
            columns={ columns }
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={ pageSizes }
            rowsPerPageOptions={ [pageSizes] }
            getRowId={ (row: any) => row.id }
        ></DataGrid>
    );

}

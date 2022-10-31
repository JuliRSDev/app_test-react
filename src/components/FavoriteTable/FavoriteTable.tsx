import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import {Person} from "@/models/people";
import {removeFavoritePeople} from "@/redux/state/favoritePeople";

export const FavoriteTable = () => {

    const dispatch = useDispatch();
    const pageSizes = 5;

    const stateFavorites = useSelector( ( store: AppStore ) => store.favorites );

    const handleClick = ( people: Person ) => dispatch( removeFavoritePeople( people ) );

    const columns = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: ( params: GridRenderCellParams ) => (
                <>
                    <DeleteIcon color='error' onClick={ () => handleClick( params.row ) } />
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
        },
        {
            field: 'levelOfHappiness',
            headerName: 'Level Of Happiness',
            flex: 1,
            minWidth: 150,
            renderCell: ( params: GridRenderCellParams ) => <>{ params.value }</>
        }
    ]

    return(
        <DataGrid
            rows={ stateFavorites }
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

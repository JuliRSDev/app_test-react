import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from "react";
import {CustomDialog, dialogOpenSubject$} from "@/components/CustomDialog";
import {FavoriteTable} from "@/components/FavoriteTable/FavoriteTable";

export const Navbar = () => {

    const handleClic = () => dialogOpenSubject$.setSubject = true;

    return (
        <>
            <CustomDialog>
                <FavoriteTable/>
            </CustomDialog>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Gentleman Programming React TEST
                    </Typography>
                    <Button variant="contained" onClick={ handleClic } >Open Favorites</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

import {SubjectManager} from "@/models/subjectmanager";
import {useEffect, useState} from "react";
import {Subscriber} from "rxjs";
import {serialize} from "v8";
import {Dialog} from "@mui/material";

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

export const CustomDialog = ( { children }: Props ) => {

    const [ open, setOpen ] = useState( false );
    let openSubject$ = new Subscriber();
    let closeSubject$ = new Subscriber();

    useEffect( () => {
        openSubject$ = dialogOpenSubject$.getSubject.subscribe( () => );
        closeSubject$ = dialogCloseSubject$.getSubject.subscribe( () => );
        return () => {
            openSubject$.unsubscribe();
            closeSubject$.unsubscribe();
        }
    }, [] );

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleExit = () => {
        dialogCloseSubject$.setSubject = false;
    }

    return(
        <div>
            <Dialog
                open={open}
                onClose={ () => handleExit() }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                { children }
            </Dialog>
        </div>
    );

}

import { People } from "@/data/people";
import { useEffect } from "react";
import { addPeople } from "@/redux/state/people";
import { PeopleTable } from "@/pages/Home/components/PeopleTable";
import {useDispatch} from "react-redux";

export const Home = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( addPeople( People ) );
    }, [] );

    return(
        <PeopleTable />
    );
}


import ResponsiveAppBar from "../AdminCreate/Nav";
import CreateUserPaper from "./Paper";
import { GrSomeIcon } from 'react-icons/gr';


export default function CreateUser() {
    return(
        <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <CreateUserPaper></CreateUserPaper>
        </>
    )
}
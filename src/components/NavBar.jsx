import {AppBar,makeStyles,Toolbar,Typography} from "@material-ui/core"
import {NavLink} from "react-router-dom";
const useStyle=makeStyles({
    header:{
    background:'#111111',
    



    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        fontSize:'20px',
        marginRight:20

    }


})

const NavBar = ()=>{
const classes = useStyle();
return(

    
    
        <AppBar className={classes.header} position ='static'>
                <Toolbar>
                    <NavLink className={classes.tabs} to="./" exact>Code for interview</NavLink >
                    <NavLink className={classes.tabs} to="all" exact>All Users</NavLink >
                    <NavLink className={classes.tabs}to = "add" exact>Add Users</NavLink >
                </Toolbar>


        </AppBar>
)


}
export default NavBar;
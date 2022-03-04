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
                    <NavLink className={classes.tabs} to="./" >House record Keeping System</NavLink >
                    <NavLink className={classes.tabs} to="all" >All Users</NavLink >
                    <NavLink className={classes.tabs}to = "add">Add Users</NavLink >
                </Toolbar>


        </AppBar>
)


}
export default NavBar;
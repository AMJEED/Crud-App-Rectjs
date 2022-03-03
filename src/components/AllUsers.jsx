import { useEffect ,useState} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell} from "@material-ui/core"

import {getUsers} from '../service/api'
const AllUsers=()=>{

      const [users,setUser]=useState([])

    useEffect(()=>{
           getAllUsers();

    },[])
    

    
      const getAllUsers= async ()=>{

            const res =await getUsers();
           
            setUser(res.data);
            
            

          }

          console.log(users)
      return(

          <Table>
                <TableHead>
                      <TableRow>
                              <TableCell>id</TableCell>
                              <TableCell>City</TableCell>
                              <TableCell>Street</TableCell>
                              <TableCell>Area</TableCell>
                              <TableCell>Number of rooms</TableCell>
                              <TableCell>Number of Kitchens</TableCell>
                              <TableCell>House price</TableCell>

                              


                      </TableRow>
                </TableHead>
                <TableBody>
                        

                </TableBody>
           </Table>
  
    )
    
  
  }
  export default AllUsers;
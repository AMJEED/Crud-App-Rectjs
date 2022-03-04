import { useEffect ,useState} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,Button} from "@material-ui/core";
import React from "react";

import Axios from "axios";





const AllUsers =()=>{

      const [list, setList] = useState([]);
      const getEmployees = () => {
            Axios.get("http://localhost:3001/api/view").then((response) => {
              setList(response.data);
            });
          };

    
          useEffect(() => {
            getEmployees()
          },[]); 



          const deleteRecord = (id) => {
            Axios.delete(`http://localhost:3001/api/delete/${id}`).then((response) => {
              setList(
                list.filter((val) => {
                  return val.id != id;
                })
              );
            });
          };
        
     
           
         return( 
      <>
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
                            <TableCell>Delete</TableCell>
                            <TableCell>Update</TableCell>




                      </TableRow>
                </TableHead><TableBody>
                            {list.map((record,index) => {
                                  return (
                                        <TableRow >
                                              <TableCell >{record.id}</TableCell>
                                              <TableCell >{record.city}</TableCell>
                                              <TableCell >{record.street}</TableCell>
                                              <TableCell >{record.area}</TableCell>
                                              <TableCell >{record.rooms}</TableCell>
                                              <TableCell >{record.kitchens}</TableCell>
                                              <TableCell>{record.price}</TableCell>
                                              <TableCell >
                                                    <Button variant="outlined" onClick={()=>{deleteRecord(record.id)}} >
                                                          Delete
                                                    </Button>
                                              </TableCell>
                                              <TableCell >
                                                    <Button variant="outlined"  >
                                                          Edit
                                                    </Button>
                                              </TableCell>

                                        </TableRow>
                                  );
                            })}

                      </TableBody>
           </Table></>)
   
    
  
  }
  export default AllUsers;
import { useEffect ,useState} from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,Button} from "@material-ui/core"


const AllUsers=()=>{

      const [house,sethouse]=useState([{}])
      const fetchAllRecords = () => {
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
		fetch("http://localhost:3002/api/view", {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log("result", result);
                        sethouse(result)
			
			})
			.catch((error) => console.log("error", error));
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
                </TableHead>
                <TableBody>
               {house.map((record) => {return (
										<TableRow>
											<TableCell>{record.id}</TableCell>
											<TableCell>{record.city}</TableCell>
											<TableCell>{record.street}</TableCell>
                                                                  <TableCell>{record.area}</TableCell>
                                                                  <TableCell>{record.rooms}</TableCell>
                                                                  <TableCell>{record.kitchens}</TableCell>
                                                                  <TableCell>{record.price}</TableCell>
											<TableCell>
												<Button >
													Edit
												</Button>
											</TableCell>
											<TableCell>
												<Button >
													Delete
												</Button>
											</TableCell>
										</TableRow>
									);
								})}
							
                </TableBody>
           </Table>
           <Button onClick={fetchAllRecords}>btn</Button>
          </>
  
    )
    
  
  }
  export default AllUsers;
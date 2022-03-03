import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useState } from 'react';

import {makeStyles} from "@material-ui/core"
 
 const AddUser = () => {
  const useStyle=makeStyles({
    bbb:{
          width:"500px",
          margin:"0 auto",
          marginTop:2

    }


})
  
const addRecord =(e)=>{
      
      let data ={h_num:hs_num,h_city:hs_city,h_street:hs_street,h_area:hs_area,h_rooms:hs_rooms,h_kitchens:hs_kitchens,h_status:hs_status,h_price:hs_price}
      alert('A form was submitted: '+data.h_area);

      fetch('http://localhost:8001/api/create', {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(data)
        }).then(function(response) {
          
           console.log(response.json());
        });
  
        alert('Data Sent ');
        e.preventDefault();
  }
  




const [hs_num,set_hs_num]=useState(0);
const [hs_city,set_hs_city]=useState('');
const [hs_street,set_hs_street]=useState('');
const [hs_area,set_hs_area]=useState(0);
const [hs_rooms,set_hs_rooms]=useState(0);
const [hs_kitchens,set_hs_kitchens]=useState(0);
const [hs_status,set_hs_status]=useState('');
const [hs_price,set_hs_price]=useState(0);

const classes = useStyle();

  return (

    <div className={classes.bbb}>
    <Form
    
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        label="House#"
        name="House#"
        rules={[
          {
            required: true,
            message: 'Please input House#',
          },
        ]}
      >
        <Input type="number" onChange={(e)=>{set_hs_num(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="House City"
        name="House City"
        rules={[
          {
            required: true,
            message: 'Please input House City',
          },
        ]}
      >
        <Input onChange={(e)=>{set_hs_city(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="House Street"
        name="House Street"
        rules={[
          {
            required: true,
            message: 'Please House Street',
          },
        ]}
      >
        <Input onChange={(e)=>{set_hs_street(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="House Total Area"
        name="House Total Area"
        rules={[
          {
            required: true,
            message: 'Please Enter House Total Area',
          },
        ]}
      >
        <Input type='number' onChange={(e)=>{set_hs_area(e.target.value)}}/>
      </Form.Item>



      <Form.Item
        label="Number of Rooms"
        name="Number of Rooms"
        rules={[
          {
            required: true,
            message: 'Please Enter total number of rooms',
          },
        ]}
      >
        <Input  type = "number" onChange={(e)=>{set_hs_rooms(e.target.value)}}/>
      </Form.Item>


      <Form.Item
        label="Number of Kitchens"
        name="Number of Kitchens"
        rules={[
          {
            required: true,
            message: 'Please Enter total number of Kitchens',
          },
        ]}
      >
        <Input onChange={(e)=>{set_hs_kitchens(e.target.value)}}/>
      </Form.Item>


     
      <Form.Item label="House status">
          
        <select onChange={(e)=>{set_hs_status(e.target.value)}}>
          <option value="old">Old</option>
          <option value="new">New</option>
          <option value="intermediate">Intermediate</option>
        </select>
       
      </Form.Item>
      <Form.Item
        label="House Price ($)"
        name="House Price"
        rules={[
          {
            required: true,
            message: 'Please Enter total Price of House in Dollars',
          },
        ]}
      >
        <Input type='number' onChange={(e)=>{set_hs_price(e.target.value)}}/>
      </Form.Item>

       

     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={addRecord}type="primary" htmlType="submit"  >
          Add Reacord
        </Button>
      </Form.Item>


      
    </Form>
  </div>
  );
};
export default AddUser;

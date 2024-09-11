import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import{useEffect, useState} from 'react';

const OrderList = () => {

    const[orders, setOrders]= useState([]);

    useEffect(()=>{

        const fetchOrders= async ()=>{
            const response= await fetch('http://localhost:4000/api/orders');
            const json= await response.json();

            if(response.ok){
                console.log(json);
                setProducts(json);
            }

        }

        fetchOrders();

        

    }, []);



    return ( 
        <div>

  <Table className="m-2 product-table" striped bordered hover size="bg" style={{ width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Ordered by</th>
                            <th>Order Status</th>
                            <th>Delivery</th>
                            <th>Order Items</th>
                    
                        </tr>
                    </thead>

                    <tbody>
                  
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.userId}</td>
                                <td>{order.status}</td>
                                <td>{order.delivery}</td>
                                <td>{order.products}</td>
                                <td><Button className="mr-2" variant="info">Edit</Button></td>
                                 {/* <td>
                                     <ButtonToolbar>
                                        <Button
                                        className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true, ordid:Order.id, ordstatus:Order.status})}
                                        >
                                            Edit
                                        </Button>

                                        <EditOrderModal
                                        show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        ordid={ordid}
                                        ordstatus={ordstatus}
                                        />
                                  </ButtonToolbar> 
                                </td> 
  */}
                              
                            </tr>
                        ))}
                    </tbody>
                </Table>

        </div>
     );
}
 
export default OrderList;
import { Routes, Route } from "react-router-dom"
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import Header from "../../components/Navbar/Header";
import ProductList from "../../components/Product/ProductList";
import './Admin.css';
import OrderList from "../../components/Order/OrderList";
import AddProductForm from "../../components/Product/AddProductForm";
import EditProductForm from "../../components/Product/EditProductForm";
import Login from "../login/Login";
import MenuList from "../../components/Menu/MenuList";
import AddMenuForm from "../../components/Menu/AddMenuForm";


const Admin = () => {
    return ( 
     <>
        <Header/>
        <div className='admin'>
                
                <AdminNavbar/>

                <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/products" element={<ProductList/>} />
                <Route path="/add-product" element={<AddProductForm/>} />
                <Route path="/edit-product/:id" element={<EditProductForm/>} />

                <Route path="menus" element={<MenuList/>}/>
                <Route path="/add-menu" element={<AddMenuForm/>} />

                <Route path="/orders" element={<OrderList/>} />
                </Routes>
                
        </div>
    </>
        
        
     );
}

export default Admin

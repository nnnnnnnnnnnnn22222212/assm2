import { Navigate, createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "./feture/layout";
import List from "./feture/page/Product/ProductList";
import ProductsDetail from "./feture/page/Detail";
import LayoutAdmin from "./feture/layout/LayoutAdmin";
import AdminProduct from "./feture/page/Adminproduct";
import ADDProduct from "./feture/page/AddProduct";
import ProductUpdate from "./feture/page/Update";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <WebsiteLayout/>,
        children: [
            {index: true, element: <div>Home</div>},
            {
                path: "products",
                element: <List/>
            },
            {
                path: "products/:id",
                element: <ProductsDetail/>
            }

        ]
    },
    {
        path: '/admin',
        element: <LayoutAdmin/>,
        children: [
            {index: true, element: <Navigate to="dasboard"/>},
            {path: 'dasboard', element: <div>Dasboard page</div>},
            {path: 'products', element: <AdminProduct/>},
            {path: 'add', element: <ADDProduct/>},
            {path: 'products/:id/update', element: <ProductUpdate/>}
            
            
        ]
    }
])
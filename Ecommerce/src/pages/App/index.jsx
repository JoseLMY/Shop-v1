import {useRoutes, BrowserRouter} from "react-router-dom"

import { ShoppingCartProvider } from "../../context";
import Home from "../Home";
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SingIn from "../SingIn"
import { NavBar } from "../../components/NavBar"
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";

import './App.css'

const AppRoutes = () => {
    let routes = useRoutes ([
        {path: "/",element: <Home />},
        {path: "/clothes",element: <Home />},
        {path: "/electronics",element: <Home />},
        {path: "/furniture",element: <Home />},
        {path: "/others",element: <Home />},
        {path: "/my-account",element: <MyAccount />},
        {path: "/my-order",element: <MyOrder />},
        {path: "/my-order/last",element: <MyOrder />},
        {path: "/my-orders",element: <MyOrders />},
        {path: "/my-orders/:id",element: <MyOrder />},
        {path: "/sing-in",element: <SingIn />},
        {path: "/*",element: <NotFound />},
    ])

    return routes
}

function App() {
    return (
        <>
            <ShoppingCartProvider>
                <BrowserRouter >
                    <AppRoutes />
                    <NavBar />
                    <CheckoutSideMenu />
                </BrowserRouter>
            </ShoppingCartProvider>
        </>
    )
}

export default App

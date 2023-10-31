import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from "react-router-dom";

import Pricing from './components/Pricing.jsx';
import Login from './components/Login.jsx';
import Register from './components/Login.jsx';


const router = createBrowserRouter([
  {path:'/', element: <App></App>}, // our domain
  {path: '/pricing', element: <Pricing></Pricing>},
  {path: '/login', element: <Login></Login>},
  {path: '/register', element: <Register></Register>}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

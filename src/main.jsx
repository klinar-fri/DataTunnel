import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from "react-router-dom";

import Pricing from './components/Pricing.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PasswordReset from './components/PasswordReset.jsx';
import Checkout from './components/Checkout.jsx';
import Dashboard from './components/Dashboard.jsx';
import { AuthProvider } from './components/AuthContext.jsx';


const router = createBrowserRouter([
  {path:'/', element: <App></App>}, // our domain
  {path: '/pricing', element: <Pricing></Pricing>},
  {path: '/login', element: <Login></Login>},
  {path: '/register', element: <Register></Register>},
  {path: '/password-reset', element: <PasswordReset></PasswordReset>},
  {path: '/dashboard', element: <Dashboard></Dashboard>},
  {path: '/checkout', element: <Checkout></Checkout>}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </AuthProvider>
)

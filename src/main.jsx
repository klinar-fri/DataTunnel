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
import Features from './components/Features.jsx';
import Support from './components/Support.jsx';
import { AuthProvider } from './components/AuthContext.jsx';


const router = createBrowserRouter([
  {path:'/', element: <App></App>}, 
  {path: '/pricing', element: <Pricing></Pricing>},
  {path: '/login', element: <Login></Login>},
  {path: '/register', element: <Register></Register>},
  {path: '/password-reset', element: <PasswordReset></PasswordReset>},
  {path: '/dashboard', element: <Dashboard></Dashboard>},
  {path: '/checkout', element: <Checkout></Checkout>},
  {path: '/features', element: <Features></Features>},
  {path: '/support', element: <Support></Support>}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </AuthProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home/Home.jsx';
import Shop from './components/Pages/Shop/Shop.jsx';
import About from './components/Pages/About/About.jsx';
import Contacts from './components/Pages/Contacts/Contacts.jsx';
import Journal from './components/Pages/Journal/Journal.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "shop",
        element: <Shop/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contacts",
        element: <Contacts/>,
      },
      {
        path: "journal",
        element: <Journal/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

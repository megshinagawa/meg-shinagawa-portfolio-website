import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Root from "./routes/root";
import About from './routes/about/about';
import Portfolio from './routes/portfolio/portfolio';
import Contact from './routes/contact/contact';
import './index.css'
import './fonts.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

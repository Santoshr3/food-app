// index.js or wherever you define routes
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import Homepage from './Component/Homepage';
import About from './Component/About';
import Contact from './Component/Contact';
import Gallery from './Component/Gallery';
import ProductDetails from './Component/ProductDetails';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './index.css';

// Layout component that includes Header and Footer, and a placeholder for child routes
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

// Define routes for the application
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: 'app',
        element: <App />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
    ],
  },
]);

// Render the application with the router provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);

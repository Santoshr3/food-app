// src/index.js
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
import ErrorBoundary from './Component/ErrorBoundary';
import "./index.css";

const AppLayout = () => (
  <ErrorBoundary>
    <Header />
    <Outlet />
    <Footer />
  </ErrorBoundary>
);

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "app", element: <App /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={AppRouter} />
);

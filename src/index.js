import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import App from './Component/App';
import About from './Component/About';
import Contact from './Component/Contact';
import ProductDetails from './Component/ProductDetails';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ErrorBoundary from './Component/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import Login from './Component/Login';

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
      { path: "/", element: <App /> },
      { path: "food-app", element: <App /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "*", element: <h1 className='fournotfour content container'><p>404 Not Found</p></h1> },
    ],
  },
]);

const AuthApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <RouterProvider 
      router={AppRouter}
      context={{ isAuthenticated, setIsAuthenticated }}
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthApp />);

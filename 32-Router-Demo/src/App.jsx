// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import ParamComp from "./Components/ParamCOmp";
import Courses from "./Components/Courses";
import Lectures from "./Components/Lectures";
import Test from "./Components/Test";
import NotFound from "./Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },

  {
    path: "/contact",

    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "lectures",
        element: <Lectures />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

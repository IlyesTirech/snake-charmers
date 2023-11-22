import React from 'react';
import Cards from './components/Cards';
import WeekOne from './pages/WeekOne';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cards/>,
    },
    {
      path: "/week1",
      element: <WeekOne/>
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import "./App.css";
import User from "./getUser/User";
import Adduser from "./addUser/Adduser";
import Updateuser from "./updateUser/Updateuser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Adduser />,
    },
    {
      path: "/update/:id",
      element: <Updateuser />,
    },
  ]);
  return (
    <div className="App">
      {/* <RouterProvider route={route}></RouterProvider> */}
      <RouterProvider router={route} />;
    </div>
  );
}

export default App;

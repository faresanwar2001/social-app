// App.tsx
import "./App.css"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import AppLayout from "./AppLayout"; 
import Login from "./components/features/auth/login"; 
import { Toaster } from "sonner";
import HomePage from "./app/(public)/home/page";
import About from "./app/(public)/about/page";

const routes = createBrowserRouter([ 
  {
    path: "",
    element: <AppLayout />,
    children: [
      {index:true, element:<HomePage/>},
      {path:"about", element:<About/>},
     
    ]
  }, 
   {
        path: "login",
        element: <Login />,
      }
]);

function App() {
  return (
    <
      
    >
    <RouterProvider router={routes} />
      <Toaster/>
    </>
  );
}

export default App;


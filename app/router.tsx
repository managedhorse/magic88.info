// app/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Homepage from "./pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Your layout component
    children: [
      {
        index: true,         // <--- indicates this is the default route for "/"
        element: <Homepage /> // the component above
      },
    ],
  },
]);
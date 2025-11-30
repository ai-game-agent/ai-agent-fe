import "@styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

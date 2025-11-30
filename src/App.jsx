import "@styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import PixelRain from "./components/pixelRain/PixelRain";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

const App = () => {
  return (
    <>
      <PixelRain />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

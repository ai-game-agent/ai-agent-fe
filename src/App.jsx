import "@styles/global.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import PixelRain from "./components/pixelRain/PixelRain";
import ChatPage from "./pages/chatPage/ChatPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/chat", element: <ChatPage /> },
]);

const App = () => {
  return (
    <>
      <PixelRain />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

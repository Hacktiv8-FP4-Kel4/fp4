import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home, { HOME_PAGE_ROUTE } from "./components/modules/home/home";
import NotFoundPage from "./pages/404-page";
import { HomePage } from "./pages/home-page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<NotFoundPage />} />
        <Route element={<HomePage />} path={HOME_PAGE_ROUTE} />
      </Routes>
    </BrowserRouter>
  );
}

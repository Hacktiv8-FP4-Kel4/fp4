import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home, { HOME_PAGE_ROUTE } from "./components/modules/home/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={HOME_PAGE_ROUTE} />
      </Routes>
    </BrowserRouter>
  );
}

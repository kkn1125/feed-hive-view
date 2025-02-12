import MainPage from "@pages/MainPage";
import Layout from "@templates/Layout";
import { Route, Routes } from "react-router-dom";

interface AppRouterProps {}
const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

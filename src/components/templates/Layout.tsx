import { Portal, Stack, Toolbar } from "@mui/material";
import Header from "@organisms/Header";
import { Outlet } from "react-router-dom";
import ColumnGrid from "./ColumnGrid";
import { MODE } from "@utils/constant";
import Footer from "@organisms/Footer";

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = () => {
  return (
    <Stack>
      {MODE === "development" && (
        <Portal>
          <ColumnGrid />
        </Portal>
      )}
      <Header />
      <Toolbar />
      <Toolbar />

      <Outlet />

      <Toolbar />
      <Footer />
    </Stack>
  );
};

export default Layout;

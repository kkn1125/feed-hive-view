import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BASE_PATH } from "@utils/constant";
import { theme } from "@utils/theme";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={BASE_PATH}>
      {/* <StrictMode> */}
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
      {/* </StrictMode> */}
    </BrowserRouter>
  </ThemeProvider>
);

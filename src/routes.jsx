import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/home";
import AsyncStorePage from "./pages/async-store";
import ExternalStoreActionsPage from "./pages/external-store-actions";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/external-store-actions", element: <ExternalStoreActionsPage /> },
  { path: "/async-store", element: <AsyncStorePage /> },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/home";
import ExternalStoreActionsPage from "./pages/external-store-actions";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/external-store-actions", element: <ExternalStoreActionsPage /> },
]);

export default router;

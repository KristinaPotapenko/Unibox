import { Route, Routes } from "react-router-dom";
import { Shop } from "../react/components/Shop/Shop";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Shop />} />
    </Routes>
  );
};

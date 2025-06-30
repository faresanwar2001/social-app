import { Outlet } from "react-router-dom";
import Header from "./components/features/layout/header/page";
export default function AppLayout() {
  return (
    <div className="container mx-auto">
      {/* Header */}
      <Header />

      <div className="container mx-auto my-5">
        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
}

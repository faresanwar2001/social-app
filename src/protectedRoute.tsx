import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // Token
  const token = localStorage.getItem("tokenUser");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


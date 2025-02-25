import { type ReactNode } from "react";
import { useAuth } from "@workos-inc/authkit-react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthLayout } from "src/layouts/auth";

import RedirectLoading from 'src/components/redirect/redirect-loading';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) return (
    <AuthLayout>
      <RedirectLoading/>
    </AuthLayout>
  );

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

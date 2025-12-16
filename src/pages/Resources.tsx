import { Navigate } from "react-router-dom";

// Resources page removed — redirect to homepage.
export default function Resources() {
  return <Navigate to="/" replace />;
}
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>No route matches URL {`${ location.pathname}`}</p>
    </div>
  );
}

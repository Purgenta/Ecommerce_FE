import { Navigate, Outlet } from "react-router-dom";
import { Role } from "../../types/types";
import { useSelector } from "react-redux";
import { authSelect } from "../../redux/slices/authSlice";
type Props = {
  roles: Role[] | "none";
};
const Protected = ({ roles }: Props) => {
  const { isAuthenticated, role } = useSelector(authSelect);
  if (!isAuthenticated) {
    return <Navigate to={"/login"}></Navigate>;
  }
  if (roles !== "none" && !roles.some((val) => val === role)) {
    return <Navigate to={"/forbidden"}></Navigate>;
  }
  return <Outlet />;
};

export default Protected;

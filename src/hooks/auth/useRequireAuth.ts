import { useSelector } from "react-redux";
import { authSelect } from "../../redux/slices/authSlice";
import { useToast } from "@chakra-ui/react";

const useRequireAuth = () => {
  const toast = useToast();
  const { isAuthenticated } = useSelector(authSelect);
  const checkAuthentication = () => {
    if (!isAuthenticated) {
      toast({ description: "You have to be logged in first" });
      return false;
    }
    return true;
  };
  return checkAuthentication;
};
export default useRequireAuth;

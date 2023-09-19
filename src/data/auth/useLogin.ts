import { LoginFormValues } from "../../components/auth/LoginForm";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import axios from "../axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/slices/authSlice";
import { CartItem, Role } from "../../types/types";
import { setCart } from "../../redux/slices/cartSlice";
const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const toast = useToast();
  const submitLoginForm = async (values: LoginFormValues) => {
    try {
      const {
        email,
        role,
        token,
        cart: { cartItems },
      } = (await axios.post(APIENDPOINTS.auth.login, values)).data as {
        email: string;
        token: string;
        role: Role;
        cart: {
          cartItems: CartItem[];
        };
      };
      dispatch(
        updateStatus({ email, role, jwt: token, isAuthenticated: true })
      );
      dispatch(setCart(cartItems));
      toast({
        title: "Success",
        description: "Sucessfully logged in",
        status: "success",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        const code = error.response?.status;
        if (code === 400) {
          setError(error.response?.data);
        }
      }
      toast({
        title: "Error",
        description: "Error while logging in",
        status: "error",
      });
    }
  };
  return { error, setError, submitLoginForm };
};
export default useLogin;

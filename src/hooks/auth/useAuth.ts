import { useEffect } from "react";
import { privateAxiosInstance } from "../../data/axios";
import { useSelector } from "react-redux";
import { authSelect, logout } from "../../redux/slices/authSlice";
import { AxiosError } from "axios";
import useRefreshToken from "./useRefreshToken";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
const useAuth = () => {
  const { jwt } = useSelector(authSelect);
  const toast = useToast();
  const dispatch = useDispatch();
  const refreshToken = useRefreshToken();
  const axios = privateAxiosInstance;
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((request) => {
      request.headers.Authorization = `Bearer ${jwt}`;
      return request;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        const request = error.config;
        const errorCode = error.status;
        if (errorCode === 401 && request) {
          try {
            const refresh = await refreshToken();
            request.headers.Authorization = `Bearer ${refresh.token}`;
          } catch (error) {
            dispatch(logout());
            toast({
              title: "Session expired",
              description: "Your session has expired,please login again",
              status: "error",
            });
          }
        }
      }
    );
    () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [jwt, refreshToken, dispatch, toast]);
  return axios;
};
export default useAuth;

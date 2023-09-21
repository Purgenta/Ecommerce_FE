import { useEffect } from "react";
import { privateAxiosInstance } from "../../data/axios";
import { useSelector } from "react-redux";
import { authSelect, logout } from "../../redux/slices/authSlice";
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
      if (!request.headers.Authorization && jwt)
        request.headers.Authorization = `Bearer ${jwt}`;
      return request;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        console.log(error);
        const request = error?.config;
        request.sent = true;
        const errorCode = error?.response.status;
        console.log(errorCode, request);
        if (errorCode === 401 && request) {
          console.log(`here`);
          try {
            const refresh = await refreshToken();
            request.headers.Authorization = `Bearer ${refresh.token}`;
            return axios(request);
          } catch (error) {
            dispatch(logout());
            toast({
              title: "Session expired",
              description: "Your session has expired,please login again",
              status: "error",
            });
          }
        }
        return error;
      }
    );
    () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [jwt]);
  return axios;
};
export default useAuth;

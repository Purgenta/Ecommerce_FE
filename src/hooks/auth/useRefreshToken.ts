import { useDispatch } from "react-redux";
import { updateAccessToken } from "../../redux/slices/authSlice";
import axios from "../../data/axios";
import { APIENDPOINTS } from "../../data/API_ENDPOINTS";
import { Role } from "../../types/types";
const useRefreshToken = () => {
  const dispatch = useDispatch();
  const refreshToken = async () => {
    const refresh = (await axios.get(APIENDPOINTS.auth.refreshToken)).data as {
      email: string;
      token: string;
      role: Role;
    };
    dispatch(updateAccessToken(refresh.token));
    return refresh;
  };
  return refreshToken;
};
export default useRefreshToken;

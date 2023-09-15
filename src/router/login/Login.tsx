import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { Box } from "@chakra-ui/react";
import useLogin from "../../data/auth/useLogin";
const Login = () => {
  const { submitLoginForm } = useLogin();
  return (
    <Box>
      <LoginForm
        onSubmit={async (values) => await submitLoginForm(values)}
      ></LoginForm>
    </Box>
  );
};

export default Login;

import {
  Button,
  Flex,
  FormLabel,
  Box,
  Heading,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import { Link as Hyper } from "react-router-dom";
export type LoginFormValues = {
  email: string;
  password: string;
};
type Props = {
  onSubmit: (values: LoginFormValues) => Promise<unknown>;
};
import { Form, Formik, Field, ErrorMessage } from "formik";
import loginSchema from "./loginValidationSchema";
const LoginForm = ({ onSubmit }: Props) => {
  return (
    <Formik
      onSubmit={async (values) => {
        console.log(values, `running`);
        await onSubmit(values);
      }}
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
    >
      {({ isSubmitting }) => (
        <Box>
          <Container maxWidth={"350px"} marginX={"auto"}>
            <Heading marginY={2} size={"md"} fontWeight={"normal"}>
              Your Gigatron account
            </Heading>
            <Text marginY={4}>
              Don't have an account?<br></br> Make one:{" "}
              <Link as={Hyper}>Create an account</Link>
            </Text>
            <Form>
              <Flex flexDirection={"column"} marginY={2}>
                <FormLabel>Email</FormLabel>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <FormLabel>Password</FormLabel>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <Button
                  marginTop={2}
                  variant={"solid"}
                  backgroundColor={"#0064e4"}
                  color={"whiteAlpha.900"}
                  isDisabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Flex>
            </Form>
          </Container>
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;

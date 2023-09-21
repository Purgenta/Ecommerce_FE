import * as Yup from "yup";
const loginSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().min(6).max(18),
});
export default loginSchema;

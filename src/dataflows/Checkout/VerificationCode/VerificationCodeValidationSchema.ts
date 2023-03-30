import * as yup from "yup";

export const VerificationCodeValidationSchema = yup.object().shape({
  verificationCode: yup.string().required("Debe ingresar el código"),
});

import * as yup from "yup";

export const PhoneNumberValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6,8}$/,
      "Número invalido, verifique el número ingresado"
    )
    .required("Debe ingresar su número de teléfono"),
});

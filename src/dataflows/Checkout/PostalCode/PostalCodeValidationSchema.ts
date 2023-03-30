import * as yup from "yup";

export const PostalCodeValidationSchema = yup.object().shape({
  postalCode: yup
    .string()
    .matches(/^(?=.*[1-9].*)[0-9]{1,5}$/g, "Código postal invalido, verifique el número ingresado")
    .test(
      "len",
      "Código postal invalido, verifique el número ingresado",
      (val) => val?.toString().length === 5
    )
    .required("Debe ingresar su código postal"),
});

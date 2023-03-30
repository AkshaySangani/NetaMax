import * as yup from "yup";

export const NameAndTermConditionsValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[^-\s][a-zA-Z\u00C0-\u017F\s-]+$/,
      "No puede contener números o comenzar con espacios"
    )
    .required("Debe ingresar su nombre"),
  isTermsAccepted: yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones."),
});

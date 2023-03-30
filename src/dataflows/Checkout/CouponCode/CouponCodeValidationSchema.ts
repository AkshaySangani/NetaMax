import * as yup from "yup";

export const CouponCodeValidationSchema = yup.object().shape({
  couponCode: yup.string().max(25, "Maximo 25 caracteres"),
});

import {
  Flex,
  Box,
  Text,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Checkmark } from "components/common/CheckMark/CheckMark";
import { Loader } from "components/common/Loader";
import { ReactElement } from "react";
import { ICouponInputProps } from "./ICouponInputProps";

/**
 * The CouponInput component.
 * @param { ICouponInputProps } props the component props.
 * @returns { ReactElement } The CouponInput component.
 */
export const CouponInput = (props: ICouponInputProps): ReactElement => {
  const {
    coupon,
    couponInputVisible,
    handleCouponVisible,
    errors,
    register,
    isCheckingCoupon,
    fetchCode,
  } = props;

  return (
    <>
      {couponInputVisible ? (
        <>
          <Flex justifyContent="space-between" marginTop="8px">
            <Text
              color="#000000"
              fontSize="18px"
              fontWeight="700"
              display="flex"
              justifyContent="flex-start"
            >
              Cupón de descuento
            </Text>
            <Text
              decoration="underline"
              color="#3870FF"
              onClick={handleCouponVisible}
              cursor="pointer"
            >
              {Array.isArray(coupon) && coupon.length !== 0 ? "Quitar cupón" : "Cerrar"}
            </Text>
          </Flex>

          <Box display="flex" w="100%">
            <FormControl isInvalid={errors.couponCode !== undefined}>
              <InputGroup alignItems="center">
                <Input
                  {...register("couponCode")}
                  errorBorderColor="red.300"
                  isInvalid={errors && errors?.couponCode ? true : false}
                  isDisabled={Array.isArray(coupon) && coupon.length !== 0}
                  placeholder="Escribe aqui tu cupón"
                  height="50px"
                />
                <InputRightElement width="27%" margin="5px 0">
                  {isCheckingCoupon ? (
                    <Loader size="lg" />
                  ) : Array.isArray(coupon) && coupon.length !== 0 ? (
                    <Checkmark size="medium" color="#000000" />
                  ) : (
                    <Button
                      _hover={{ backgroundColor: "none" }}
                      backgroundColor="white"
                      textColor="black"
                      fontSize="16px"
                      fontWeight="400"
                      borderRadius="20px"
                      border="1px solid black"
                      height="34px"
                      onClick={fetchCode}
                      type="submit"
                    >
                      Validar
                    </Button>
                  )}
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors && errors?.couponCode?.message}</FormErrorMessage>
            </FormControl>
          </Box>
        </>
      ) : (
        <Text color="#3870FF" decoration="underline" cursor="pointer" onClick={handleCouponVisible}>
          ¿Tienes un cupón?
        </Text>
      )}
    </>
  );
};

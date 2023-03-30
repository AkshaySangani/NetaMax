import { Drawer } from "@chakra-ui/react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { OrderConfirmed } from "./OrderConfirmed";
import { IOrderConfirmedProps } from "./IOrderConfirmedProps";

describe("OrderConfirmed component", () => {
  let mock: IOrderConfirmedProps;
  const isOpen = true;
  const onClose = jest.fn();
  const handleCopy = jest.fn();
  const handleClose = jest.fn();

  /**
   * The OrderConfirmed Component
   * @returns {ReactElement} The OrderConfirmed component
   */
  const renderOrderConfirmed = () => {
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        closeOnEsc
        closeOnOverlayClick
      >
        <OrderConfirmed {...mock} />
      </Drawer>
    );
  };

  beforeEach(() => {
    mock = {
      handleClose,
      handleCopy,
      copyText: "Algo a copiar",
      currentShop: {
        Hosts: "hosts-test",
        Id: "",
        CompanyName: "",
        Name: "",
        CompanyAddress: "",
        CompanyPhoneNumber: "",
      },
      orderDetail: {
        name: "",
        orderTotal: 0,
        orderSubtotalInclTax: 0,
        orderDiscount: 0,
        productsAmount: 0,
        productsOrder: [],
        customer: {
          id: "1063507",
          name: "asd",
          isNewUser: true,
          ZipPostalCode: "asd",
          username: "541134375450",
          email: "541134375450",
          billingAddress_Id: "86287",
          shippingAddress_Id: "",
          customerGuid: "027ce196-3b7c-409a-b33f-0e2966cf8c5f",
          isTaxExempt: true,
          affiliateId: "",
          vendorId: "",
          hasShoppingCartItems: false,
          deleted: false,
          registeredInStoreId: "",
          customerCurrentNetaWallet: "0.000000000000000",
          referralCode: "Milo-Molina-7620",
          firstName: "Milo Molina",
        },
      },
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("OrderConfirmed should be render correctly", () => {
    const { container } = render(renderOrderConfirmed());
    expect(container).toMatchSnapshot();
  });

  test("Header should be render properly", () => {
    render(renderOrderConfirmed());
    expect(screen.getByText("Entrega confirmada correctamente")).toBeInTheDocument();
  });

  test("Body should be render properly", () => {
    render(renderOrderConfirmed());
    expect(screen.getByText("Sigue compartiendo tu liga")).toBeInTheDocument();
    expect(screen.getByText("Para que sigas ganando con tus entregas")).toBeInTheDocument();
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("Descuento")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText(mock.copyText)).toBeInTheDocument();
    fireEvent.click(screen.getByText(mock.copyText));
    expect(handleCopy).toHaveBeenCalled();
  });

  test("Footer should be render properly", () => {
    render(renderOrderConfirmed());
    expect(screen.getByText("Regresar al inicio")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Regresar al inicio"));
    expect(handleClose).toHaveBeenCalled();
  });
});

import { Drawer } from "@chakra-ui/react";
import { render, cleanup, screen } from "@testing-library/react";
import { OrderDetails } from "./OrderDetails";
import { IOrderDetailsProps } from "./IOrderDetailsProps";

describe("OrderDetails component", () => {
  let mock: IOrderDetailsProps;
  const isOpen = true;
  const onClose = jest.fn();
  const onVerify = jest.fn();

  // eslint-disable-next-line require-jsdoc
  const renderOrderDetails = () => {
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        closeOnEsc
        closeOnOverlayClick
      >
        <OrderDetails {...mock} />
      </Drawer>
    );
  };

  beforeEach(() => {
    mock = {
      onVerify,
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

  test("OrderDetails should be render correctly", () => {
    const { container } = render(renderOrderDetails());
    expect(container).toMatchSnapshot();
  });

  test("Header should be render properly", () => {
    render(renderOrderDetails());
    expect(screen.getByTestId("order-details-header")).toHaveTextContent(/Productos a entregar/);
  });

  test("Body should be render properly", () => {
    render(renderOrderDetails());
    expect(screen.getByText("Información de la orden")).toBeInTheDocument();
    expect(screen.getByText("Cliente")).toBeInTheDocument();
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("Descuento")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  test("Footer should be render properly", () => {
    render(renderOrderDetails());
    expect(screen.getByText("Confirmar entrega")).toBeInTheDocument();
  });
});

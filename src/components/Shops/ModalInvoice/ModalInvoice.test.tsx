import { render, cleanup } from "@testing-library/react";
import { ModalInvoice } from "./ModalInvoice";
import { IModalInvoiceProps } from "./IModalInvoiceProps";

jest.mock("next/router", () => require("next-router-mock"));
let mock: IModalInvoiceProps;

describe("ModalInvoice Component", () => {
  const onClose = jest.fn();
  const onOpen = jest.fn();
  const modalInvoice = {
    invoice: {
      id: "20014",
      storeId: "4221",
      storeName: "Venta de catalogo Gina ",
      storePhone: "5584497063",
      storeOwner: "Georgina angel mora",
      pdfUrl:
        "https://ops-facturas.s3.us-east-2.amazonaws.com/Facturas/2022/04/04/stores/4221/2022-04-04-4221-invoice",
      status: "CLOSED",
      orders: "234602,234605,234618,236841,236848,236850,236851",
      invoiceDate: "2022-04-04",
      subTotal: 1746.8126,
      orderDisccount: 99,
      customerDebit: 0,
      storeCommisssion: 70,
      storeDebit: 0,
      createdOnUtc: "2022-04-05T10:19:02.000Z",
      deliveryStatus: "PENDING",
      qtyOrders: 7,
      qtyCustomers: 7,
    },
    credit: {
      dropToPay: 1746.8126,
      creditToPay: 0,
      totalToPayToday: 1746.8126,
      dayOfWeek: 1,
      InvoiceType: 0,
    },
    storeProfit: {
      today: 0,
      week: 0,
      month: 170,
      historical: 1350,
      profitweekdatefrom: "2022-04-04T00:00:00.000Z",
      profitmonthdatefrom: "2022-04-01T00:00:00.000Z",
      profitweekdateto: "2022-04-04 23:59:00",
    },
    orderItems: [
      {
        id: 615724,
        idProduct: 65,
        name: "Antitranspirante Rexona Motion Sense powder dry en roll on para dama 50 ml",
        Quantity: 1,
        UnitPriceInclTax: 20.9,
        PriceInclTax: 20.9,
      },
    ],
    metadata: {
      currentPage: 1,
      perPage: 1,
      totalPages: 1,
      updatedAt: "2022-05-27T18:28:48+00:00",
      nextRefresh: 3600,
    },
  };

  beforeEach(() => {
    mock = {
      onClose,
      onOpen,
      modalInvoice,
      invoice: {
        id: "20014",
        storeId: "4221",
        storeName: "Venta de catalogo Gina ",
        storePhone: "5584497063",
        storeOwner: "Georgina angel mora",
        pdfUrl:
          "https://ops-facturas.s3.us-east-2.amazonaws.com/Facturas/2022/04/04/stores/4221/2022-04-04-4221-invoice",
        status: "CLOSED",
        orders: "234602,234605,234618,236841,236848,236850,236851",
        invoiceDate: "2022-04-04",
        subTotal: 1746.8126,
        orderDisccount: 99,
        customerDebit: 0,
        storeCommisssion: 70,
        storeDebit: 0,
        createdOnUtc: "2022-04-05T10:19:02.000Z",
        deliveryStatus: "PENDING",
        qtyOrders: 7,
        qtyCustomers: 7,
      },
      credit: {
        dropToPay: 1746.8126,
        creditToPay: 0,
        totalToPayToday: 1746.8126,
        dayOfWeek: 1,
        InvoiceType: 0,
      },
      storeProfit: {
        today: 0,
        week: 0,
        month: 170,
        historical: 1350,
        profitweekdatefrom: "2022-04-04T00:00:00.000Z",
        profitmonthdatefrom: "2022-04-01T00:00:00.000Z",
        profitweekdateto: "2022-04-04 23:59:00",
      },
      orderItems: [
        {
          id: 615724,
          idProduct: 65,
          name: "Antitranspirante Rexona Motion Sense powder dry en roll on para dama 50 ml",
          Quantity: 1,
          UnitPriceInclTax: 20.9,
          PriceInclTax: 20.9,
        },
      ],
      metadata: {
        currentPage: 1,
        perPage: 1,
        totalPages: 1,
        updatedAt: "2022-05-27T18:28:48+00:00",
        nextRefresh: 3600,
      },
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("ModalInvoice component should be render correctly", () => {
    const { container } = render(<ModalInvoice {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

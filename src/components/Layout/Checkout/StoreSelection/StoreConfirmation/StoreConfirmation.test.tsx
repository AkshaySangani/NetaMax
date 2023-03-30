import { cleanup, render, screen } from "@testing-library/react";
import { INearestStore } from "dataflows/Stores/INearestStore";
import { IStoreConfirmationProps } from "./IStoreConfirmationProps";
import { StoreConfirmation } from "./StoreConfirmation";

describe("Render StoreConfirmation component", () => {
  let storeMocked: INearestStore;
  let mock: IStoreConfirmationProps;
  beforeEach(() => {
    storeMocked = {
      id: "2",
      name: "Super",
      storeDistance: "10.3",
      companyAddress: "Avenida insurgentes Sur 1886, Florida, Ciudad de México, CDMX, México.",
      url: "",
      companyName: "",
      hosts: "",
      companyPhoneNumber: "",
      latlong: {
        lat: 19.43215411,
        lng: -99.14388543,
      },
    };
    mock = {
      store: storeMocked,
      handleChooseAnotherStore: jest.fn(),
      handleStoreConfirmation: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("StoreConfirmation should be rendered correctly", () => {
    const { container } = render(<StoreConfirmation {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Store name should be rendered properly", () => {
    render(<StoreConfirmation {...mock} />);
    expect(screen.getByText(mock.store.name)).toBeInTheDocument();
  });

  test("Store company address should be rendered properly", () => {
    render(<StoreConfirmation {...mock} />);
    expect(screen.getByText(mock.store.companyAddress)).toBeInTheDocument();
  });

  test("'Elegir tienda' should be rendered properly", () => {
    render(<StoreConfirmation {...mock} />);
    expect(screen.getByText("Elegir tienda")).toBeInTheDocument();
  });

  test("'Elegir otra tiendita' should be rendered properly", () => {
    render(<StoreConfirmation {...mock} />);
    expect(screen.getByText("Elegir otra tiendita")).toBeInTheDocument();
  });
});

import { cleanup, render, screen } from "@testing-library/react";
import { INearestStore } from "dataflows/Stores/INearestStore";
import { IStoreListProps } from "./IStoreListProps";
import { StoreList } from "./StoreList";

describe("Render StoreConfirmation component", () => {
  let storesMocked: INearestStore[];
  let mock: IStoreListProps;
  beforeEach(() => {
    storesMocked = [
      {
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
      },
    ];
    mock = {
      stores: storesMocked,
      open: false,
      handleSelectStore: jest.fn(),
      handleTopClick: jest.fn(),
      address: "Address 1234",
      searchValue: "",
      onSearchValueChange: jest.fn(),
      allNearestsAmount: 10,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("StoreList should be rendered correctly", () => {
    const { container } = render(<StoreList {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Store name should be rendered properly", () => {
    render(<StoreList {...mock} />);
    const stores = mock.stores.length > 0 ? mock.stores : [];
    const name = stores[0]?.name || "this text is not in the doc";
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test("The amount of stores should be rendered correctly", () => {
    render(<StoreList {...mock} />);
    expect(
      screen.getByText(`Selecciona una de las ${mock.allNearestsAmount} tienditas que están cerca`)
    ).toBeInTheDocument();
  });

  test("The user address should be rendered correctly", () => {
    render(<StoreList {...mock} />);
    expect(screen.getByText(mock.address)).toBeInTheDocument();
  });

  test("The placeholder to search should be rendered properly", () => {
    render(<StoreList {...mock} />);
    expect(screen.getByPlaceholderText("Nombre de tienda")).toBeInTheDocument();
  });
});

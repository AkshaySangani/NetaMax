import { cleanup, render, screen } from "@testing-library/react";
import { INearestStore } from "dataflows/Stores/INearestStore";
import { DeliverySite } from "./DeliverySite";
import { IDeliverySiteProps } from "./IDeliverySiteProps";

describe("DeliverySite component test", () => {
  let mock: IDeliverySiteProps;
  let selectedStore: INearestStore;
  beforeEach(() => {
    selectedStore = {
      id: "1",
      name: "Tienda Agustin",
      url: "google.com",
      hosts: "google.com",
      companyAddress: "Lamartine 111",
      companyName: "Tienda Agustin",
      companyPhoneNumber: "1111111111",
      storeDistance: "10.000",
      storeDistanceInMinutes: "10.000",
      location: {
        lat: 20,
        lng: 20,
      },
    };
    mock = {
      updateStore: jest.fn(),
      selectedStore,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("DeliverySite should be rendered correctly", () => {
    const { container } = render(<DeliverySite {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("DeliverySite store name should be in the document", () => {
    render(<DeliverySite {...mock} />);
    expect(screen.getByText(mock.selectedStore?.name || "no store found")).toBeInTheDocument();
  });

  test("DeliverySite store address should be in the document", () => {
    render(<DeliverySite {...mock} />);
    expect(
      screen.getByText(mock.selectedStore?.companyAddress || "no address")
    ).toBeInTheDocument();
  });

  test("DeliverySite cambiar tiendita should be in the document", () => {
    render(<DeliverySite {...mock} />);
    expect(screen.getByText("Cambiar tiendita")).toBeInTheDocument();
  });
});

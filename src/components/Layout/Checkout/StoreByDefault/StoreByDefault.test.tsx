import { render, cleanup } from "@testing-library/react";
import { StoreByDefault } from "./StoreByDefault";
import { IStoreByDefaultProps } from "./IStoreByDefaultProps";

describe("StoreByDefault Component", () => {
  let mock: IStoreByDefaultProps;

  beforeEach(() => {
    mock = {
      store: {
        id: "16031ABC22NMX",
        name: "Store 1",
        url: "https://neta.mx/",
        hosts: "Host 1",
        companyName: "Company 1",
        companyAddress: "Company Add.",
        companyPhoneNumber: "+140 876 313",
      },
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("StoreByDefault should be render correctly", () => {
    const { container } = render(<StoreByDefault {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Show title correctly", () => {
    const { getByTestId } = render(<StoreByDefault {...mock} />);
    expect(getByTestId("storeName").textContent).toMatch("Store 1");
    expect(getByTestId("storeAddress").textContent).toMatch("Company Add.");
  });
});

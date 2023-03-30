import { render, cleanup, fireEvent } from "@testing-library/react";
import { NearestStore } from "./NearestStore";
import { INearestStoreProps } from "./INearestStoreProps";

describe("NearestStore Component", () => {
  const onStoreClick = jest.fn();
  let mock: INearestStoreProps;

  beforeEach(() => {
    mock = {
      id: "16031ABC22NMX",
      name: "Store 1",
      url: "https://neta.mx/",
      hosts: "Host 1",
      companyName: "Company 1",
      companyAddress: "Company Add.",
      companyPhoneNumber: "+140 876 313",
      storeDistance: "7",
      onStoreClick,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("NearestStore should be render correctly", () => {
    const { container } = render(<NearestStore {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("NearestStore component button should be clickable", () => {
    const { getByTestId } = render(<NearestStore {...mock} />);
    fireEvent.click(getByTestId("nearStoreButton"));
    expect(onStoreClick).toBeCalledTimes(1);
  });
});

import { render, cleanup } from "@testing-library/react";
import { NavBarShops } from "./NavBarShops";
import { INavBarShopsProps } from "./INavBarShopsProps";

describe("NavBarShops component", () => {
  let mock: INavBarShopsProps;

  beforeEach(() => {
    mock = {
      shopUser: [
        {
          Id: "16031ABC22NMX",
          Name: "Store 1",
          Hosts: "Host 1",
          CompanyName: "Company 1",
          CompanyAddress: "Company Add.",
          CompanyPhoneNumber: "+140 876 313",
        },
      ],
      logout: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("NavBarShops should be render correctly", () => {
    const { container } = render(<NavBarShops {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Name should be present in document", () => {
    mock = {
      ...mock,
      shopUser: [
        {
          Id: "16031ABC22NMX",
          Name: "Store 1",
          Hosts: "Host 1",
          CompanyName: "Company 1",
          CompanyAddress: "Company Add.",
          CompanyPhoneNumber: "+140 876 313",
        },
      ],
    };
    const { container } = render(<NavBarShops {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

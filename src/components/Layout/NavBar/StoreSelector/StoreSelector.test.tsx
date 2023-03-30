import { render, cleanup } from "@testing-library/react";
import { StoreSelector } from "./StoreSelector";
import { IStoreSelectorProps } from "./IStoreSelectorProps";

describe("StoreSelector Component", () => {
  let mock: IStoreSelectorProps;

  beforeEach(() => {
    mock = {
      storeName: "Store 1",
      hasPadding: true,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("StoreSelector should be render correctly", () => {
    const { container } = render(<StoreSelector {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("StoreSelector should be also render correctly with false hasPadding flag", () => {
    mock = {
      storeName: "Store 1",
      hasPadding: false,
    };
    const { container } = render(<StoreSelector {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

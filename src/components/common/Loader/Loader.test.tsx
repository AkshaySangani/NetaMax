import { render, cleanup } from "@testing-library/react";
import { Loader } from "./index";
import { ILoaderProps } from "./index";

describe("Render Loader component", () => {
  let mock: ILoaderProps;

  beforeEach(() => {
    mock = {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "netaRed.500",
      size: "xl",
      delay: 0,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Loader should be render correctly with default props", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });

  test("Loader should be render correctly with props", () => {
    const { container } = render(<Loader {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Loader should render only if delay set to 0", () => {
    const delay = 1;
    const { container } = render(<Loader delay={delay} />);
    expect(container).toBeEmptyDOMElement();
  });
});

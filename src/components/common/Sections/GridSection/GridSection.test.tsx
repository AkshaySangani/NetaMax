import { render, cleanup, screen } from "@testing-library/react";
import { GridSection } from "./GridSection";
import { IGridSectionProps } from "./IGridSectionProps";

describe("GridSection component", () => {
  let mock: IGridSectionProps;

  const testElements = ["Test1", "Test2"].map((item, i) => {
    return (
      <div data-testid="test-element" key={i}>
        {" "}
        {item}{" "}
      </div>
    );
  });

  beforeEach(() => {
    mock = {
      title: "Title",
      elements: testElements,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("GridSection should be render correctly", () => {
    const { container } = render(<GridSection {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("title should be present in document", () => {
    render(<GridSection {...mock} />);
    expect(screen.getByText(mock.title)).toBeInTheDocument();
  });

  test("number of rendered elements match with the length of the testElements array", () => {
    const { queryAllByTestId } = render(<GridSection {...mock} />);
    expect(queryAllByTestId("test-element")).toHaveLength(mock.elements.length);
  });
});

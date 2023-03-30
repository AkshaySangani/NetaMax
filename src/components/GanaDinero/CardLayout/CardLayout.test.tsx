import { render, cleanup, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { CardLayout } from "./CardLayout";
import { ICardLayoutProps } from "./ICardLayoutProps";

describe("Render CardLayout Component", () => {
  const props: ICardLayoutProps = {
    bannerText: "Test Banner",
  };

  /**
   * TestChildren test component
   * @returns {ReactElement} the react element to render.
   */
  const TestChildren = (): ReactElement => (
    <div>
      <span data-testid="card-layout-test-children">This is a test</span>
    </div>
  );

  test("CardLayout should render properly without children", () => {
    const { container } = render(<CardLayout {...props} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("card-layout-banner").textContent).toMatch(props.bannerText);
    expect(screen.getByTestId("card-layout-children").childElementCount).toBe(0);
  });

  test("CardLayout should render properly with test children", () => {
    const { container } = render(
      <CardLayout {...props}>
        <TestChildren />
      </CardLayout>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("card-layout-children").childElementCount).toBe(1);
    expect(screen.getByTestId("card-layout-test-children").textContent).toMatch("This is a test");
  });

  afterEach(() => {
    cleanup();
  });
});

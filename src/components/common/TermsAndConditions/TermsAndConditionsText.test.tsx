import { render, cleanup } from "@testing-library/react";
import { TermsAndConditionsText } from "./TermsAndConditionsText";

describe("TermsAndConditionsText Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("TermsAndConditionsText should be render correctly", () => {
    const { container } = render(<TermsAndConditionsText />);
    expect(container).toMatchSnapshot();
  });
});

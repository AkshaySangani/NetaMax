import { render } from "@testing-library/react";
import { EmbeddedVideo } from "./EmbeddedVideo";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render EmbeddedVideo component", () => {
  it("EmbeddedVideo should be render correctly", () => {
    const { container } = render(<EmbeddedVideo videoUrlId="D-OJLyECbfo" />);
    expect(container).toMatchSnapshot();
  });
});

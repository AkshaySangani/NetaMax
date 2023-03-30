import { render, cleanup, screen } from "@testing-library/react";
import { TrackingButton } from "./TrackingButton";
import { ITrackingButtonProps } from "./ITrackingButtonProps";

describe("TrackingButton component", () => {
  let mock: ITrackingButtonProps;

  beforeEach(() => {
    mock = {
      trackingUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com",
      disabled: false,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("TrackingButton should be render correctly", () => {
    const { container, getByTestId } = render(<TrackingButton {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("link")).toHaveAttribute("href", `${mock.trackingUrl}`);
    expect(getByTestId("Tracking button")).not.toBeDisabled();
  });

  test("TrackingButton should be render correctly with disabled true", () => {
    mock = { ...mock, disabled: true };
    const { container, getByTestId } = render(<TrackingButton {...mock} />);
    expect(container).toMatchSnapshot();
    expect(getByTestId("Tracking button")).toBeDisabled();
  });
});

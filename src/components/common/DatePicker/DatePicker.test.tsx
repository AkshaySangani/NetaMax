import { render, cleanup } from "@testing-library/react";
import { DatePicker } from "./DatePicker";
import { IDatePickerProps } from "./IDatePickerProps";

describe("DatePicker Component", () => {
  let mock: IDatePickerProps;
  const onDateChange = jest.fn();

  beforeEach(() => {
    mock = {
      onDateChange,
      currentDate: new Date("December 17, 1995 13:24:00"),
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("DatePicker should be render correctly", () => {
    const { container } = render(<DatePicker {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

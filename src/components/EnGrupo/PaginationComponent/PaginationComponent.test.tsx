import { render, fireEvent } from "@testing-library/react";
import PaginationComponent from "./PaginationComponent";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render PaginationComponent component", () => {
  it("PaginationComponent should be render correctly", () => {
    const { container } = render(
      <PaginationComponent page={1} totalPage={2} onChangePage={() => null} />
    );
    expect(container).toMatchSnapshot();
  });

  it("PaginationComponent should click in page", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <PaginationComponent page={1} totalPage={2} onChangePage={onClickMock} />
    );
    fireEvent.click(getByText("1"));
    expect(onClickMock).toBeCalledTimes(1);
  });
});

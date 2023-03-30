import { render, fireEvent } from "@testing-library/react";

import { LegalAgeModal } from "./LegalAgeModal";

const modalPropsDefault = {
  isOpen: true,
  title: "Modal",
  description: "Description",
  onClickModal: () => null,
};

describe("Render ModalComponent component", () => {
  it("ModalComponent should be render correctly", () => {
    const { container } = render(<LegalAgeModal {...modalPropsDefault} />);
    expect(container).toMatchSnapshot();
  });

  it("ModalComponent should be not render, when isOpen is false", () => {
    const { queryByText } = render(<LegalAgeModal {...modalPropsDefault} isOpen={false} />);
    expect(queryByText("Modal")).not.toBeInTheDocument();
  });

  it("ModalComponent should on click, when click in button 'SI'", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <LegalAgeModal {...modalPropsDefault} onClickModal={onClickMock} />
    );
    fireEvent.click(getByText("Si"));
    expect(onClickMock).toBeCalledTimes(1);
  });

  it("ModalComponent should on click, when click in button 'NO'", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <LegalAgeModal {...modalPropsDefault} onClickModal={onClickMock} />
    );
    fireEvent.click(getByText("No"));
    expect(onClickMock).toBeCalledTimes(1);
  });
});

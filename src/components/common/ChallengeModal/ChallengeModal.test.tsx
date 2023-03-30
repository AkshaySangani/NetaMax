import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { ChallengeModal } from "./ChallengeModal";
import { IChallengeModalProps } from "./IChallengeModalProps";

describe("Render ChallengeModal Component", () => {
  const props: IChallengeModalProps = {
    onAccept: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
  };

  test("ChallengeModal shows up and render properly", () => {
    const { container } = render(<ChallengeModal {...props} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("challenge-modal-content")).toBeDefined();
  });

  afterEach(() => {
    cleanup();
  });
});

describe("Test ChallengeModal component functions", () => {
  const props: IChallengeModalProps = {
    onAccept: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
  };

  it("execute onClose when clicking the close button", () => {
    render(<ChallengeModal {...props} />);
    fireEvent.click(screen.getByTestId("challenge-modal-close-button"));
    expect(props.onClose).toBeCalled();
  });

  it("execute onAccept when clicking the modal button", () => {
    render(<ChallengeModal {...props} />);
    fireEvent.click(screen.getByTestId("challenge-modal-button"));
    expect(props.onAccept).toBeCalled();
  });
});

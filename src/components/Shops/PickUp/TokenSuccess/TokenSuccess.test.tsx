import { Drawer } from "@chakra-ui/react";
import { render, cleanup, screen } from "@testing-library/react";
import { TokenSuccess } from "./TokenSuccess";
import { ITokenSuccessProps } from "./ITokenSuccessProps";

describe("TokenSuccess component", () => {
  let mock: ITokenSuccessProps;
  const isOpen = true;
  const onClose = jest.fn();

  /**
   * The TokenSuccess Component
   * @returns {ReactElement} The TokenSuccess component
   */
  const renderTokenSuccess = () => {
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        closeOnEsc
        closeOnOverlayClick
      >
        <TokenSuccess {...mock} />
      </Drawer>
    );
  };

  beforeEach(() => {
    mock = {
      code: "123456",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("TokenSuccess should be render correctly", () => {
    const { container } = render(renderTokenSuccess());
    expect(container).toMatchSnapshot();
  });

  test("Title should be render properly", () => {
    render(renderTokenSuccess());
    expect(screen.getByText("Código verificado")).toBeInTheDocument();
  });

  test("Message should be render properly", () => {
    render(renderTokenSuccess());
    expect(screen.getByText("Este código funcionó correctamente")).toBeInTheDocument();
  });
});

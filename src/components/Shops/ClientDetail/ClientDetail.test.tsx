import { render, cleanup, screen } from "@testing-library/react";
import { ClientDetail } from "./ClientDetail";
import { IClientDetailProps } from "./IClientDetailProps";

describe("ClientDetail Component", () => {
  let mock: IClientDetailProps;
  const onShareButtonClick = jest.fn();

  beforeEach(() => {
    mock = {
      userName: "Admin-Store1",
      numberOfOrders: 150,
      daysAgoLastOrder: 2,
      phone: "0876313",
      storeName: "Store 1",
      url: "https://neta.mx/",
      customerId: "16031ABC22NMX",
      id: "16031ABC22NMX2022",
      onShareButtonClick: onShareButtonClick,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("ClientDetail should be render correctly with daysAgoLastOrder between 0 to 3", () => {
    const { container } = render(<ClientDetail {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("ClientDetail should be render correctly with daysAgoLastOrder <= 6 days", () => {
    mock = { ...mock, daysAgoLastOrder: 5 };
    const { container } = render(<ClientDetail {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("ClientDetail should be render correctly with daysAgoLastOrder >= 7 days", () => {
    mock = { ...mock, daysAgoLastOrder: 8 };
    const { container } = render(<ClientDetail {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Compartir liga Link should be render properly", () => {
    render(<ClientDetail {...mock} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=52${mock.phone}&text=¡Hola!%20%C2%BFYa%20viste%20las%20promos%20de%20hoy%20en%20neta%3F%20Ingresa%20a%20mi%20liga:%20https://neta.mx/?${mock.storeName}`
    );
  });
});

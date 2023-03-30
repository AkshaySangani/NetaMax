import { render, fireEvent } from "@testing-library/react";
import AccordionComponent from "./AccordionComponent";
import { IAccordionItemComponentProps } from "./IAccordionComponentProps";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render AccordionComponent component", () => {
  it("AccordionComponent should be render correctly", () => {
    const { container } = render(<AccordionComponent items={[]} onChangePagination={() => null} />);
    expect(container).toMatchSnapshot();
  });

  it("AccordionComponent should click in page, when expanded category", () => {
    const onClickMock = jest.fn();
    const items: IAccordionItemComponentProps[] = [
      {
        title: "Lo más vendido",
        products: [
          {
            name: "Leche Clasica Alpura",
          },
        ],
        page: 1,
        totalPage: 5,
      },
    ];
    const { getByText } = render(
      <AccordionComponent items={items} onChangePagination={onClickMock} />
    );
    fireEvent.click(getByText("Lo más vendido"));
    fireEvent.click(getByText("2"));
    expect(onClickMock).toBeCalledTimes(1);
  });
});

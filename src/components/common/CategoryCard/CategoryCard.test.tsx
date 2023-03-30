import { render, cleanup, fireEvent } from "@testing-library/react";
import { CategoryCard } from "./CategoryCard";
import { ICategoryCardProps } from "./ICategoryCardProps";

describe("CategoryCard Component", () => {
  const onCategoryClick = jest.fn();
  let mock: ICategoryCardProps;

  beforeEach(() => {
    mock = {
      category: {
        id: "1978",
        name: "Huevo blanco San Juan 12 pzas",
        seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002120_0.jpeg",
        createdOnUtc: new Date(),
        updatedOnUtc: new Date(),
      },
      onCategoryClick,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("CategoryCard should be render correctly", () => {
    const { container } = render(<CategoryCard {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Alt text of image should not be null", () => {
    const { getByAltText } = render(<CategoryCard {...mock} />);
    expect(getByAltText("Huevo blanco San Juan 12 pzas")).toBeInTheDocument();
  });

  test("CategoryCard should be clickable", () => {
    const { getByAltText } = render(<CategoryCard {...mock} />);
    fireEvent.click(getByAltText("Huevo blanco San Juan 12 pzas"));
    expect(onCategoryClick).toBeCalledTimes(1);
    expect(onCategoryClick).toHaveBeenCalledWith(mock.category);
  });
});

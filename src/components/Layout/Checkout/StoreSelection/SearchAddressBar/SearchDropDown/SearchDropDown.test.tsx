import { cleanup, render, screen } from "@testing-library/react";
import { ISearchDropDownProps } from "./ISearchDropDownProps";
import { SearchDropDown } from "./SearchDropDown";

describe("Render SearchDropDown component", () => {
  let dataMocked: google.maps.places.AutocompletePrediction[];
  let mock: ISearchDropDownProps;
  beforeEach(() => {
    dataMocked = [
      {
        description: "Adana, Reşatbey, Seyhan/Provincia de Adana, Turquía",
        distance_meters: 12133677,
        matched_substrings: [],
        place_id: "ChIJk3GcpziPKBURBuoLWNh0FtY",
        reference: "ChIJk3GcpziPKBURBuoLWNh0FtY",
        structured_formatting: {
          main_text: "Adana",
          main_text_matched_substrings: Array(1),
          secondary_text: "Reşatbey, Seyhan/Provincia de Adana, Turquía",
        },
        terms: [],
        types: ["locality", "political", "geocode"],
      },
    ];
    mock = {
      data: dataMocked,
      status: "OK",
      handleSelectAddress: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("SearchDropDown should be rendered correctly", () => {
    const { container } = render(<SearchDropDown {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Main text of data should be rendered properly", () => {
    render(<SearchDropDown {...mock} />);
    const dataList = mock.data.length > 0 ? mock.data : [];
    const mainText = dataList[0]?.structured_formatting.main_text || "this text is not in the doc";
    expect(screen.getByText(mainText)).toBeInTheDocument();
  });

  test("Secondary text of data should be rendered properly", () => {
    render(<SearchDropDown {...mock} />);
    const dataList = mock.data.length > 0 ? mock.data : [];
    const secondaryText =
      dataList[0]?.structured_formatting.secondary_text || "this text is not in the doc";
    expect(screen.getByText(secondaryText)).toBeInTheDocument();
  });
});

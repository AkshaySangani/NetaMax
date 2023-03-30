import { render, cleanup } from "@testing-library/react";
import { MyInfoForm } from "./MyInfoForm";
import { IMyInfoFormProps } from "./IMyInfoFormProps";

describe("MyInfoForm Component", () => {
  let mock: IMyInfoFormProps;
  beforeEach(() => {
    mock = {
      Hosts: "Host.ABC",
      CompanyPhoneNumber: "xxx xxx xxxx",
      CompanyAddress: "NetaMX Head Office",
      Name: "NetaMX",
      CompanyName: "NetaMX",
      Id: "nmx123",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("MyInfoForm should be render correctly", () => {
    const { container } = render(<MyInfoForm {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

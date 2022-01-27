import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";

import SelectField from "./index";

const mockData = [
  {
    org_name: "Crooks-Bode",
    background_image:
      "https://assets.qatalog.com/interview-kit/bg/crooks-bode.png",
  },
  {
    org_name: "Mayer-Strosin",
    background_image:
      "https://assets.qatalog.com/interview-kit/bg/mayer-strosin.png",
  },
];

describe("SelectField", () => {
  beforeEach(() => {
    const props = {
      options: mockData,
      handleChange: jest.fn(),
      val: "",
    };
    render(<SelectField {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("should render select field", () => {
    const selectNode = screen.getByTestId("select");
    expect(selectNode).toBeInTheDocument();
  });
  test("should display the correct number of options", () => {
    expect(screen.getAllByRole("option").length).toBe(3);
  });

  test("should allow user to change theme", () => {
    let options = screen.getAllByRole("option");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    fireEvent.click(screen.getByTestId("select"), {
      target: { value: "Crooks-Bode" },
    });
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    fireEvent.click(screen.getByTestId("select"), {
      target: { value: "" },
    });
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });
});

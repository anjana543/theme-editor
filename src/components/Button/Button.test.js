import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";

import Button from "./index";

describe("Button", () => {
  beforeEach(() => {
    const props = {
      text: "Apply Theme",
      onClickHandler: jest.fn(),
    };
    render(<Button {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Apply Button", () => {
    expect(screen.queryByText("Apply Theme")).toBeTruthy();
    expect(screen.queryByText("Test")).toBeFalsy();
  });
});

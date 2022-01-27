import { render, screen, cleanup } from "../../utils/testUtils";

import Header from "./index";

describe("Header", () => {
  beforeEach(() => {
    const props = { Tag: "h1", text: "Qatalog homepage!" };
    render(<Header {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders H1 tag", () => {
    const node = screen.getByText("Qatalog homepage!");
    expect(node).toBeInTheDocument();
  });
});

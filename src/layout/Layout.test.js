import { render, screen } from "../utils/testUtils";
import Layout from "./index";

describe("Layout", () => {
  test("renders Layout with background color", () => {
    const { container } = render(<Layout />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(
      container.getElementsByClassName("bg-accent-neutral-200").length
    ).toBe(1);
  });
});

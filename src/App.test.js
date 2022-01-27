import { render, screen } from "./utils/testUtils";
import App from "./App";

test("full app rendering/navigating", () => {
  render(<App />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});

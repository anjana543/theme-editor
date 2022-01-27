import { render, screen, cleanup } from "../../utils/testUtils";
import Home from "./index";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Home page with title and footer component", async () => {
    const node = screen.getByText("Welcome to the Qatalog homepage!");
    expect(node).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});

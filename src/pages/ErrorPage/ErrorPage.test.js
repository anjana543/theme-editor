import { render, screen, cleanup } from "../../utils/testUtils";
import Error from "./index";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Error", () => {
  beforeEach(() => {
    render(<Error />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Error page with error message and footer component", async () => {
    const node = screen.getByText("Error Page!");
    expect(node).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});

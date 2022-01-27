import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";
import Footer from "./index";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer text="Go Back" path="/home" />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Footer container", () => {
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
  test("link click works", () => {
    fireEvent.click(screen.getByTestId("footer"));
    expect(mockedNavigator).toHaveBeenCalledTimes(1);
  });
});

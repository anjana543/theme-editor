import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";
import { act, renderHook } from "@testing-library/react-hooks";
import Setting from "./index";
import useFetch from "../../hooks/useFetch";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Setting", () => {
  beforeEach(() => {
    render(<Setting />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Setting page", async () => {
    const main = screen.getByTestId("setting");
    expect(main).toBeInTheDocument();
  });
  test("renders Select, buttons and footer components", async () => {
    const selectNode = screen.getByTestId("select");
    expect(selectNode).toBeInTheDocument();
    const items = await screen.findAllByRole("button");
    expect(items).toHaveLength(3);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("display theme list by calling useFetch hook", async () => {
    const { result, waitForValueToChange } = renderHook(() => useFetch(), {
      initialProps: { loading: true, delay: 1000 },
    });
    expect(result.current.data.length).toBe(0);
    await waitForValueToChange(() => result.current.data);
    //check the length of data returned from the useFetch hook
    expect(result.current.data.length).toBe(5);

    //check the length of select option
    let options = screen.getAllByRole("option");
    expect(options.length).toBe(6);

    //default is selected initially
    expect(screen.getByTestId("select").value).toBe("");

    //Change the theme
    fireEvent.click(screen.getByTestId("select"), {
      target: { value: "Crooks-Bode" },
    });

    //Crooks-Bode theme is selected
    expect(screen.getByTestId("select").value).toBe("Crooks-Bode");

    //trigger reset button
    const resetButton = screen.queryByText("Reset");
    expect(resetButton).toBeTruthy();
    fireEvent.click(resetButton);
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "" },
    });
    expect(screen.getByTestId("select").value).toBe("");
  });
});

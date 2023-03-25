import App from "./App";

it("should return true", () => {
  const x = 5;
  expect(true).toBe(true);
  // expect(x).toBe(4);
});

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(testScreen.getAllByText(/Vite/i)[0]).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    act(() => {
      /* fire events that update state */
      userEvent.click(testScreen.getByRole("button"));
      userEvent.click(testScreen.getByRole("button"));
    });
    expect(await testScreen.findByText(/count is 2/i)).toBeInTheDocument();
  });
});

export {};

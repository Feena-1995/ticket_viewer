import axios from "axios";
import { render, waitFor } from "@testing-library/react";

import App from "../App";

jest.mock("axios");

describe("App page", () => {
  test("Loading page due to initial request.", async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId("loading-page"));
    });
  });

  test("Error page due to initial request failed.", async () => {
    axios.post.mockImplementation(() =>
      Promise.reject({ message: "Data not valid" })
    );

    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId("error-page"));
    });
  });

  test("Tickets page due to initial request success.", async () => {
    axios.post.mockImplementation(() =>
      Promise.resolve({
        data: {
          tickets: [],
        },
      })
    );

    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId("tickets-page"));
    });
  });
});

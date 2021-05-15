import axios from "axios";
import { render, waitFor } from "@testing-library/react";
import App from "../../../App";

jest.mock("axios");

const mockTicket = {
  id: "test",
  subject: "test",
  updated_at: "test",
  status: "test",
  priority: "test",
  requester_id: "test",
  assignee_id: "test",
  group_id: "test",
};

describe("Ticket Pagination", () => {
  test("Pagination display with more than 25 tickets", async () => {
    let mockData = [];
    for (let i = 0; i < 26; i++) {
      mockData.push({ id: i + 1, ...mockTicket });
    }

    axios.post.mockImplementation(() =>
      Promise.resolve({
        data: {
          tickets: mockData,
        },
      })
    );

    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId("pagination"));
      expect(getByTestId("pagination-back"));
      expect(getByTestId("pagination-forward"));
    });
  });

  test("Pagination not display with less than 25 tickets", async () => {
    let mockData = [];
    for (let i = 0; i < 24; i++) {
      mockData.push({ id: i + 1, ...mockTicket });
    }

    axios.post.mockImplementation(() =>
      Promise.resolve({
        data: {
          tickets: mockData,
        },
      })
    );

    const { queryByTestId } = render(<App />);

    await waitFor(() => {
      expect(queryByTestId("pagination")).toBeNull();
    });
  });
});

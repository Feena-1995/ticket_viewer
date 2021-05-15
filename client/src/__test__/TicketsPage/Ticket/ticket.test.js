import { render, waitFor } from "@testing-library/react";
import Ticket from "../../../component/ticket/Ticket";

const mockData = {
  id: "test",
  subject: "test",
  updated_at: "test",
  status: "test",
  priority: "test",
  requester_id: "test",
  assignee_id: "test",
  group_id: "test",
};

describe("Ticket display items", () => {
  test("Ticket display items exist.", async () => {
    const { getByTestId } = render(<Ticket ticketDisplay={mockData} />);

    await waitFor(() => {
      expect(getByTestId("ticket-priorty"));
      expect(getByTestId("ticket-status"));
      expect(getByTestId("ticket-id"));
      expect(getByTestId("ticket-subject"));
      expect(getByTestId("ticket-requester"));
      expect(getByTestId("ticket-date"));
      expect(getByTestId("ticket-group"));
      expect(getByTestId("ticket-assignee"));
    });
  });
});

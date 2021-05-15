import { render, waitFor } from "@testing-library/react";
import TicketDetails from "../../component/ticketDetails/TicketDetails";

const mockData = {
  id: "test",
  subject: "test",
  updated_at: "test",
  description: "test",
  requester_id: "test",
  assignee_id: "test",
  submitter_id: "test",
};

describe("Ticket details display items", () => {
  test("Ticket details display items exist when click ticket.", async () => {
    const { getByTestId } = render(<TicketDetails selectTicket={mockData} />);

    await waitFor(() => {
      expect(getByTestId("detail-id"));
      expect(getByTestId("detail-subject"));
      expect(getByTestId("detail-description"));
      expect(getByTestId("detail-requester_id"));
      expect(getByTestId("detail-assignee_id"));
      expect(getByTestId("detail-submitter_id"));
    });
  });
});

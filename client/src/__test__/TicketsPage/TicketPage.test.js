import { render, waitFor } from "@testing-library/react";
import TicketsPage from "../../page/ticketPage/TicketPage";

const mockData = [
  {
    id: "test",
    subject: "test",
    updated_at: "test",
    status: "test",
    priority: "test",
    requester_id: "test",
    assignee_id: "test",
    group_id: "test",
  },
];

describe("Ticket page", () => {
  test("Ticket header and ticket rows exist.", async () => {
    const { getByTestId, getAllByTestId } = render(
      <TicketsPage tickets={mockData} />
    );

    await waitFor(() => {
      expect(getByTestId("ticket-header"));
      expect(getAllByTestId(/^ticket-row-*/)).toHaveLength(mockData.length);
    });
  });
});

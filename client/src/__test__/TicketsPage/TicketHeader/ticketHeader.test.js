import { render, waitFor } from "@testing-library/react";
import TicketHeader from "../../../component/ticketHeader/TicketHeader";

describe("Ticket header items", () => {
  test("Ticket deader items exist.", async () => {
    const { getByTestId } = render(<TicketHeader />);

    await waitFor(() => {
      expect(getByTestId("header-priority"));
      expect(getByTestId("header-status"));
      expect(getByTestId("header-id"));
      expect(getByTestId("header-subject"));
      expect(getByTestId("header-requester"));
      expect(getByTestId("header-updated"));
      expect(getByTestId("header-group"));
      expect(getByTestId("header-assignee"));
    });
  });
});

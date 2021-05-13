const request = require("supertest");
const axios = require("axios");

const app = require("../app");
jest.mock("axios");

const mockData = {
  data: {
    tickets: [
      {
        url: "https://feenatian.zendesk.com/api/v2/tickets/1.json",
        id: 1,
        external_id: null,
        via: {
          channel: "sample_ticket",
          source: {
            from: {},
            to: {},
            rel: null,
          },
        },
        created_at: "2021-05-04T11:58:27Z",
        updated_at: "2021-05-04T11:58:27Z",
        type: "incident",
        subject: "Sample ticket: Meet the ticket",
        raw_subject: "Sample ticket: Meet the ticket",
        description:
          "Hi Feena,\n\nThis is your first ticket. Ta-da! Any customer request sent to your supported channels (email, chat, voicemail, web form, and tweet) will become a Support ticket, just like this one. Respond to this ticket by typing a message and clicking Submit. You can also see how an email becomes a ticket by emailing your new account, support@feenatian.zendesk.com. Your ticket will appear in ticket views.\n\nThat's the ticket on tickets. If you want to learn more, check out: \nhttps://support.zendesk.com/hc/en-us/articles/203691476\n",
        priority: "normal",
        status: "open",
        recipient: null,
        requester_id: 902098492346,
        submitter_id: 902098491286,
        assignee_id: 902098491286,
        organization_id: null,
        group_id: 900004614106,
        collaborator_ids: [],
        follower_ids: [],
        email_cc_ids: [],
        forum_topic_id: null,
        problem_id: null,
        has_incidents: false,
        is_public: true,
        due_at: null,
        tags: ["sample", "support", "zendesk"],
        custom_fields: [],
        satisfaction_rating: null,
        sharing_agreement_ids: [],
        followup_ids: [],
        ticket_form_id: 900000359686,
        brand_id: 900001276486,
        allow_channelback: false,
        allow_attachments: true,
      },
    ],
    meta: {
      has_more: true,
      after_cursor: "eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ==",
      before_cursor: "eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ==",
    },
    links: {
      prev: "https://feenatian.zendesk.com/api/v2/tickets.json?page%5Bbefore%5D=eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ%3D%3D&page%5Bsize%5D=1",
      next: "https://feenatian.zendesk.com/api/v2/tickets.json?page%5Bafter%5D=eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ%3D%3D&page%5Bsize%5D=1",
    },
  },
};

describe("GET /", () => {
  test("it should be respond with the string hello world", async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello World");
  });

  test("404 everything else", async () => {
    request(app).get("/foo/bar").expect(404);
  });
});

describe("Get /tickets", () => {
  test("it should get all the tickets", async () => {
    axios.get.mockResolvedValue(mockData);

    const response = await request(app).post("/tickets").send({
      username: "feenatian@gmail.com",
      password: "T1995#jn",
    });

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(response.text).toEqual(JSON.stringify(mockData.data));
  });
});

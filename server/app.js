const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/tickets", async (req, res) => {
  const { username, password } = req.body;

  try {
    const response = await axios.get(
      "https://feenatian.zendesk.com/api/v2/tickets.json?page[size]=25",
      {
        auth: {
          username: username,
          password: password,
        },
      }
    );

    res.status(200).send(response.data);
  } catch (err) {
    res.status(err.response.status).send(err);
  }
});

module.exports = app;

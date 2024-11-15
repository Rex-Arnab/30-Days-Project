import dovenv from "dotenv";
import express from "express";

import quotesArray from "./quotesSource.json" assert { type: "json" };

const app = express();
dovenv.config();

const port = process.env.PORT || 4000;

app.get("/quoteslist", (req, res) => {
  console.log(quotesArray);

  res.send(quotesArray);
});
app.get("/randomquotes", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 21);
  const randomQuote = quotesArray[randomNumber];
  console.log(randomQuote);

  res.send(randomQuote);
});

app.get("/twitter", (req, res) => {
  res.send("hello twitter...");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi theredd");
});

app.listen("3001", () => console.log("Listening on server"));

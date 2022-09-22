const express = require("express");

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get("/api/v1/ticketess", (req, res, next) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

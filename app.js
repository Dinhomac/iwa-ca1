import react from "react";
import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hello from home page"));

app.listen(PORT, () =>
  console.log(`Server is running on port: http:localhost:${PORT}`)
);
<div>
  <h1> My first express plus node page</h1>
</div>;

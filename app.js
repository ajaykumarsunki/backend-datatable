const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;

const app = express();

const contactsRoutes = require("./routes/contacts");

//middleware
app.use(cors());
app.use("/", contactsRoutes);

app.listen(PORT, () => console.log("Server is listening on port " + PORT));

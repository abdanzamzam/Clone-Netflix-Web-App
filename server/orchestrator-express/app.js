const express = require("express");
const app = express();
const routes = require("./routes");
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
});

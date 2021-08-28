const express = require("express");
const { run } = require("./config");
const routes = require("./routes");
const app = express();
const port = 4000;

run().catch(console.dir);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
});

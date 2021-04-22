const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();

app.get("/", (req, res) => {
  console.log("AAAA");
  res.send("Hello World!");
});
//
app.listen(8080, () => {
  console.log("server start..");
});

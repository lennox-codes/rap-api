const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());

console.log(__dirname);

let rappers = {
  "21 savage": {
    age: 28,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },

  "chance the rapper": {
    age: 27,
    birthName: "Chancellor Jonathan Bennett",
    birthLocation: "London, England",
  },

  dylan: {
    age: "unknown",
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

//Note that to get what is on your machine, you will need the postman agent.
//Also note that in express this is how you specify the parameter name;
app.get("/api/rappers/:rapperName", (request, response) => {
  //Look at the request, look at the params and then grab that parameter;
  const rapName = request.params.rapperName.toLowerCase();
  console.log(rapName);

  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else response.json(rappers[dylan]);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

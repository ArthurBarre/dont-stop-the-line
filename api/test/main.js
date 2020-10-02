const fetch = require("node-fetch");

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  body: JSON.stringify({
    userId: 123,
    path: [
      { lat: 1.22, long: 1.988 },
      { lat: 1.22, long: 1.988 },
    ],
  }),
};

function test() {
  fetch("http://34.251.233.20:3001/paths/addPath", options, function (
    err,
    res
  ) {
    if (err) console.log(err);
    console.log(res);
  });
}

test();

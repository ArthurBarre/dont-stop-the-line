const fetch = require("node-fetch");

const optionsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
};

function test(x, y, i) {
  fetch(
    "http://34.251.233.20:3001/paths/addPath",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        userId: i,
        path: [{ lat: x, long: y }],
      }),
    },
    function (err, res) {
      if (err) console.log(err);
      console.log(res);
    }
  );
}

function get() {
  fetch("http://34.251.233.20:3001/paths/getPath", optionsGet, function (
    err,
    res
  ) {
    if (err) console.log(err);
    console.log(res);
  });
}
for (let i = 0; i < 12; i++) {
  test(i, i + 3, i + 10);
}

// const { default: fetch } = require("node-fetch");

const API_URL_POST = "http://34.251.233.20:3001/paths/addPath";
const API_URL_GET = "http://34.251.233.20:3001/paths/getPath";

const track = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      registerLocation(position.coords.latitude, position.coords.longitude);
    });
  } else {
    console.log("geolocation service is not ok");
  }
};
const button = document.getElementById("button");

const registerLocation = async (lat, long) => {
  const userId = 1;
  let user = {
    userId,
    paths: { lat: lat, long: long },
  };
  await fetch(API_URL_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
};

button.addEventListener("click", async () => {
  track();
});

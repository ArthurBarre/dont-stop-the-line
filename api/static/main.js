const API_URL = "http://34.251.233.20:3001/paths/addPath";

const track = () => {
  const lat = geolocationCoordinatesInstance.latitude;
  const long = geolocationCoordinatesInstance.longitude;

  console.log(lat);
};

const button = document.getElementById("button");

let user = {
  userId: 122,
  path: [
    { lat: 1.22, long: 1.988 },
    { lat: 1.22, long: 1.988 },
    { lat: 1.22, long: 1.988 },
  ],
};
button.addEventListener("click", async () => {
  let response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });

  console.log(response);
});

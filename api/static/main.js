const API_URL = "localhost:3001/paths/addPath";

const track = () => {
  const lat = geolocationCoordinatesInstance.latitude;
  const long = geolocationCoordinatesInstance.longitude;

  console.log(lat);

  //   setTimeout(() => {}, 5000);
};
const button = document.getElementById("button");
button.addEventListener("click", function () {
  // setTimeout(() => {
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   let lat = position.coords.latitude;
  //   let long = position.coords.longitude;
  let userId = 122;
  //   let paths = [
  //     {
  //       lat: 12,
  //       long: 12,
  //     },
  //   ];

  // console.log("lat", lat);
  // console.log("long", long);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      userId,
      paths: [
        {
          userId: 122,
          path: [{ hello: "worldwedsd" }],
        },
      ],
    }),
  };
  fetch(API_URL, options, function (err, res) {
    if (err) console.log(err);
    console.log(res);
  });
  // });
  // }, 5000);
});

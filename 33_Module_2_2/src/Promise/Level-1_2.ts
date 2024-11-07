enum WeatherType {
  none,
  sunny,
  cloudy,
  rainy,
  snowy,
  stormy,
  windy,
}

const weatherPromise: Promise<WeatherType> = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);
  if (randomNum < 6) {
    resolve(randomNum);
  } else {
    reject("Weather forecast could not be determined");
  }
});

weatherPromise
  .then((resp) => {
    console.log(WeatherType[resp]);
  })
  .catch((err) => {
    console.log(err);
  });

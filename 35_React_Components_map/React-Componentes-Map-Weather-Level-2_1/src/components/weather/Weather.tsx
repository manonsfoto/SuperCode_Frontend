import Day from "../day/Day";
import "./Weather.css";

const Weather = () => {
  const data = [
    { day: "Montag", temperature: 22, condition: "Sonnig", emoji: "☀️" },
    { day: "Dienstag", temperature: 19, condition: "Wolkig", emoji: "☁️" },
    { day: "Mittwoch", temperature: 24, condition: "Sonnig", emoji: "☀️" },
    {
      day: "Donnerstag",
      temperature: 18,
      condition: "Regnerisch",
      emoji: "☔",
    },
    {
      day: "Freitag",
      temperature: 21,
      condition: "Teilweise bewölkt",
      emoji: "⛅",
    },
    { day: "Samstag", temperature: 12, condition: "Wolkig", emoji: "☁️" },
    { day: "Sonntag", temperature: 11, condition: "Sonnig", emoji: "☀️" },
  ];
  return (
    <section className="flex section_weather">
      <h2>Wettervorschau</h2>

      <div className="flex card-wrapper">
        {data.map((dailyWeather, index) => (
          <Day key={index} dailyWeather={dailyWeather} />
        ))}
      </div>
    </section>
  );
};

export default Weather;

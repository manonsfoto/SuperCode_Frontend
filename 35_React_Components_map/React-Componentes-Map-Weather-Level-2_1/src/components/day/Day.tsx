import "./Day.css";

interface PropsDay {
  dailyWeather: IData;
}
interface IData {
  day: string;
  temperature: number;
  condition: string;
  emoji: string;
}

const Day: React.FC<PropsDay> = (props) => {
  return (
    <article className="card flex">
      <h3>{props.dailyWeather.day}</h3>
      <p className="temp">{props.dailyWeather.temperature}℃</p>
      <p>{props.dailyWeather.condition}</p>
      <p className="emoji">{props.dailyWeather.emoji}</p>
    </article>
  );
};

export default Day;

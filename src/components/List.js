export default function List({ activities, weather, onDeleteActivity }) {
  const filteredActivities = activities.filter((activity) =>
    weather?.isGoodWeather
      ? activity["good-weather"]
      : !activity["good-weather"]
  );
  console.log(weather);
  return (
    <>
      {weather?.isGoodWeather ? (
        <h2>
          Good Weather Activities {weather?.condition} ({weather?.temperature}
          °C)
        </h2>
      ) : (
        <h2>
          Bad Weather Activities {weather?.condition} ({weather?.temperature}°C)
        </h2>
      )}
      <ul>
        {filteredActivities.map((activity) => (
          <li key={activity.id}>
            {activity.activity}
            <button onClick={() => onDeleteActivity(activity.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

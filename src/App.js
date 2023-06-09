import Form from "./components/Form";
import List from "./components/List";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    }
    const interval = setInterval(fetchWeather, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List
        activities={activities}
        weather={weather}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  );
}

export default App;

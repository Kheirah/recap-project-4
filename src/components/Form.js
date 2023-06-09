export default function Form({ onAddActivity }) {

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const activity = Object.fromEntries(formData);
        onAddActivity(activity);
        form.reset();
        form.elements.activity.focus();
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Weather Activities App</h2>
      <label htmlFor="activity">Activity</label>
      <input type="text" id="activity" name="activity" />
      <label htmlFor="good-weather">Good Weather</label>
      <input type="checkbox" id="good-weather" name="good-weather" />
      <button type="submit">Add Activity</button>
    </form>
  );
}

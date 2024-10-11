import { useState } from "react";

export default function Page1() {
  const [formValues, setFormValues] = useState({
    name: "",
    location: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  return (
    <>
      <h2>feedback</h2>

      <div id="feedback">
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <label htmlFor="feedback">feedback</label>
          <textarea
            className="textarea"
            type="text"
            name="feedback"
            id="feedback"
            value={formValues.feedback}
            onChange={handleInputChange}
          />

          <p>Current value is: {formValues.name}</p>
          <p>Current value is: {formValues.feedback}</p>

          <button type="submit">submit</button>
        </form>
      </div>

      <div className="prev-feedback">
        <h2>previous feedback</h2>
      </div>
      <div className="prev">{/* map going here */}</div>
    </>
  );
}

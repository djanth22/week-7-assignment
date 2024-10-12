import { useState } from "react";
import { useEffect } from "react";

export default function Page1() {
  const [formValues, setFormValues] = useState({
    name: "",
    first_time: "",
    feedback: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
    fetch("http://localhost:8080/newfeedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    async function fetchDB() {
      const response = await fetch("http://localhost:8080/feedback");
      const data = await response.json();
      const dataRev = data.reverse();

      setDbData(dataRev);
    }
    fetchDB();
  }, []);

  return (
    <>
      <h2>Visitor feedback and comments</h2>
      <p>
        feel free to leave us a little comment, review or your thoughts, it
        would mean a lot to us. <br />
        <br /> Abuse of other guests or staff via will not be tolerated and any
        such comment left here will be removed. <br /> <br /> Also, feel free to
        leave any inquiries, requests or complaints as this page is monitored by
        out team, although we would like to state that official complaints and
        requests should be done via the propper channels and procedures which
        will take priority over any left here. <br />
        <br /> If you dont see your feedback straight away, just refresh the
        page, thank you for your time and your comments.
      </p>

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
          <label htmlFor="first_time">first time, Yes/No?</label>
          <input
            type="text"
            name="first_time"
            id="first_time"
            value={formValues.first_time}
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

          <p>Current name value is: {formValues.name}</p>
          <p>Current first time value is: {formValues.first_time}</p>
          <p>Current feedback value is: {formValues.feedback}</p>

          <button className="submitButton" type="submit">
            submit
          </button>
        </form>
      </div>

      <div className="prev-feedback">
        <h2>previous feedback</h2>
      </div>
      <div className="prev">
        {dbData.map((data) => {
          return (
            <>
              <div className="feed" key={data.id}>
                <p>name: {data.name}</p>
                <p>First time?: {data.first_time}</p>
                <p>Feedback: {data.feedback}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

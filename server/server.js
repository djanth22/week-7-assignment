import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "this is the root route" });
});

app.get("/feedback", async (req, res) => {
  //   res.json({ message: "this is the feedback" });
  try {
    const feedbackData = await db.query(`SELECT * FROM feedback;`);
    console.log(feedbackData);
    res.status(200).json(feedbackData.rows);
  } catch (error) {
    console.error("error, something is not right", error);
    res.status(500).json({ success: false });
  }
});

app.post("/newfeedback", (req, res) => {
  const bodyData = req.body;
  res.json({ message: "user feedback" });
  console.log(bodyData);

  db.query(
    `INSERT INTO feedback (name, first_time, feedback) VALUES ($1, $2 , $3 )`,
    [
      bodyData.formValues.name,
      bodyData.formValues.first_time,
      bodyData.formValues.feedback,
    ]
  );
});

import app from "./src/app.js";
import dotenv from "dotenv";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} and using the database ${process.env.DB_NAME}`,
  );
});
